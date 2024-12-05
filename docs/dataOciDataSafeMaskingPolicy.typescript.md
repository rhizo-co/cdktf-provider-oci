# `dataOciDataSafeMaskingPolicy` Submodule <a name="`dataOciDataSafeMaskingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicy <a name="DataOciDataSafeMaskingPolicy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy oci_data_safe_masking_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig">DataOciDataSafeMaskingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig">DataOciDataSafeMaskingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger">addMaskingColumnsFromSdmTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.columnSource">columnSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList">DataOciDataSafeMaskingPolicyColumnSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.generateHealthReportTrigger">generateHealthReportTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isDropTempTablesEnabled">isDropTempTablesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isRedoLoggingEnabled">isRedoLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isRefreshStatsEnabled">isRefreshStatsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.parallelDegree">parallelDegree</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.postMaskingScript">postMaskingScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.preMaskingScript">preMaskingScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.recompile">recompile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addMaskingColumnsFromSdmTrigger`<sup>Required</sup> <a name="addMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger"></a>

```typescript
public readonly addMaskingColumnsFromSdmTrigger: number;
```

- *Type:* number

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.columnSource"></a>

```typescript
public readonly columnSource: DataOciDataSafeMaskingPolicyColumnSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList">DataOciDataSafeMaskingPolicyColumnSourceList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `generateHealthReportTrigger`<sup>Required</sup> <a name="generateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.generateHealthReportTrigger"></a>

```typescript
public readonly generateHealthReportTrigger: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDropTempTablesEnabled`<sup>Required</sup> <a name="isDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isDropTempTablesEnabled"></a>

```typescript
public readonly isDropTempTablesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRedoLoggingEnabled`<sup>Required</sup> <a name="isRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isRedoLoggingEnabled"></a>

```typescript
public readonly isRedoLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRefreshStatsEnabled`<sup>Required</sup> <a name="isRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.isRefreshStatsEnabled"></a>

```typescript
public readonly isRefreshStatsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `parallelDegree`<sup>Required</sup> <a name="parallelDegree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.parallelDegree"></a>

```typescript
public readonly parallelDegree: string;
```

- *Type:* string

---

##### `postMaskingScript`<sup>Required</sup> <a name="postMaskingScript" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.postMaskingScript"></a>

```typescript
public readonly postMaskingScript: string;
```

- *Type:* string

---

##### `preMaskingScript`<sup>Required</sup> <a name="preMaskingScript" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.preMaskingScript"></a>

```typescript
public readonly preMaskingScript: string;
```

- *Type:* string

---

##### `recompile`<sup>Required</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.recompile"></a>

```typescript
public readonly recompile: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyColumnSource <a name="DataOciDataSafeMaskingPolicyColumnSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSource.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyColumnSource: dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSource = { ... }
```


### DataOciDataSafeMaskingPolicyConfig <a name="DataOciDataSafeMaskingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyConfig: dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy#masking_policy_id DataOciDataSafeMaskingPolicy#masking_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy#masking_policy_id DataOciDataSafeMaskingPolicy#masking_policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyColumnSourceList <a name="DataOciDataSafeMaskingPolicyColumnSourceList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyColumnSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyColumnSourceOutputReference <a name="DataOciDataSafeMaskingPolicyColumnSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource">columnSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSource">DataOciDataSafeMaskingPolicyColumnSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource"></a>

```typescript
public readonly columnSource: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyColumnSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicy.DataOciDataSafeMaskingPolicyColumnSource">DataOciDataSafeMaskingPolicyColumnSource</a>

---



