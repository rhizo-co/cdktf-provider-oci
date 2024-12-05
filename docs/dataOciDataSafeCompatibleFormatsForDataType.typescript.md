# `dataOciDataSafeCompatibleFormatsForDataType` Submodule <a name="`dataOciDataSafeCompatibleFormatsForDataType` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeCompatibleFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type oci_data_safe_compatible_formats_for_data_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType(scope: Construct, id: string, config?: DataOciDataSafeCompatibleFormatsForDataTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig">DataOciDataSafeCompatibleFormatsForDataTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig">DataOciDataSafeCompatibleFormatsForDataTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeCompatibleFormatsForDataType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeCompatibleFormatsForDataType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeCompatibleFormatsForDataType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType">formatsForDataType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `formatsForDataType`<sup>Required</sup> <a name="formatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType"></a>

```typescript
public readonly formatsForDataType: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeConfig <a name="DataOciDataSafeCompatibleFormatsForDataTypeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForDataTypeConfig: dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType: dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType = { ... }
```


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats: dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get"></a>

```typescript
public get(index: number): DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a>

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForDataType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats">maskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `maskingFormats`<sup>Required</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats"></a>

```typescript
public readonly maskingFormats: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a>

---



