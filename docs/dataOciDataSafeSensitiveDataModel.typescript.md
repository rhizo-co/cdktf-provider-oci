# `dataOciDataSafeSensitiveDataModel` Submodule <a name="`dataOciDataSafeSensitiveDataModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModel <a name="DataOciDataSafeSensitiveDataModel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig">DataOciDataSafeSensitiveDataModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig">DataOciDataSafeSensitiveDataModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.appSuiteName">appSuiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList">DataOciDataSafeSensitiveDataModelTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appSuiteName`<sup>Required</sup> <a name="appSuiteName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.appSuiteName"></a>

```typescript
public readonly appSuiteName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled"></a>

```typescript
public readonly isAppDefinedRelationDiscoveryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIncludeAllSchemas`<sup>Required</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSchemas"></a>

```typescript
public readonly isIncludeAllSchemas: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypes`<sup>Required</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes"></a>

```typescript
public readonly isIncludeAllSensitiveTypes: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSampleDataCollectionEnabled`<sup>Required</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled"></a>

```typescript
public readonly isSampleDataCollectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schemasForDiscovery`<sup>Required</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.schemasForDiscovery"></a>

```typescript
public readonly schemasForDiscovery: string[];
```

- *Type:* string[]

---

##### `sensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery"></a>

```typescript
public readonly sensitiveTypeIdsForDiscovery: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tablesForDiscovery`<sup>Required</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tablesForDiscovery"></a>

```typescript
public readonly tablesForDiscovery: DataOciDataSafeSensitiveDataModelTablesForDiscoveryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList">DataOciDataSafeSensitiveDataModelTablesForDiscoveryList</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelConfig <a name="DataOciDataSafeSensitiveDataModelConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelConfig: dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}.

---

### DataOciDataSafeSensitiveDataModelTablesForDiscovery <a name="DataOciDataSafeSensitiveDataModelTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelTablesForDiscovery: dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelTablesForDiscoveryList <a name="DataOciDataSafeSensitiveDataModelTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference <a name="DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModel } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames">tableNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery">DataOciDataSafeSensitiveDataModelTablesForDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames"></a>

```typescript
public readonly tableNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelTablesForDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModel.DataOciDataSafeSensitiveDataModelTablesForDiscovery">DataOciDataSafeSensitiveDataModelTablesForDiscovery</a>

---



