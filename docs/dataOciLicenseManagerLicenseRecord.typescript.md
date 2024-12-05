# `dataOciLicenseManagerLicenseRecord` Submodule <a name="`dataOciLicenseManagerLicenseRecord` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerLicenseRecord <a name="DataOciLicenseManagerLicenseRecord" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_record oci_license_manager_license_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord(scope: Construct, id: string, config: DataOciLicenseManagerLicenseRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig">DataOciLicenseManagerLicenseRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig">DataOciLicenseManagerLicenseRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isConstruct"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformElement"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformDataSource"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerLicenseRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerLicenseRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerLicenseRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.isPerpetual">isPerpetual</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.isUnlimited">isUnlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseCount">licenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseUnit">licenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productLicense">productLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.supportEndDate">supportEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseRecordIdInput">licenseRecordIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseRecordId">licenseRecordId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.isPerpetual"></a>

```typescript
public readonly isPerpetual: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

---

##### `licenseUnit`<sup>Required</sup> <a name="licenseUnit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseUnit"></a>

```typescript
public readonly licenseUnit: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `productLicense`<sup>Required</sup> <a name="productLicense" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productLicense"></a>

```typescript
public readonly productLicense: string;
```

- *Type:* string

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportEndDate`<sup>Required</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.supportEndDate"></a>

```typescript
public readonly supportEndDate: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `licenseRecordIdInput`<sup>Optional</sup> <a name="licenseRecordIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseRecordIdInput"></a>

```typescript
public readonly licenseRecordIdInput: string;
```

- *Type:* string

---

##### `licenseRecordId`<sup>Required</sup> <a name="licenseRecordId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.licenseRecordId"></a>

```typescript
public readonly licenseRecordId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerLicenseRecordConfig <a name="DataOciLicenseManagerLicenseRecordConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.Initializer"></a>

```typescript
import { dataOciLicenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerLicenseRecordConfig: dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.licenseRecordId">licenseRecordId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_record#license_record_id DataOciLicenseManagerLicenseRecord#license_record_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `licenseRecordId`<sup>Required</sup> <a name="licenseRecordId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecord.DataOciLicenseManagerLicenseRecordConfig.property.licenseRecordId"></a>

```typescript
public readonly licenseRecordId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_record#license_record_id DataOciLicenseManagerLicenseRecord#license_record_id}.

---



