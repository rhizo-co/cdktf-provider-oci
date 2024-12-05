# `dataOciCoreVnicAttachments` Submodule <a name="`dataOciCoreVnicAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVnicAttachments <a name="DataOciCoreVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments oci_core_vnic_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachments(scope: Construct, id: string, config: DataOciCoreVnicAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig">DataOciCoreVnicAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig">DataOciCoreVnicAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetVnicId">resetVnicId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVnicAttachmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetVnicId` <a name="resetVnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetVnicId"></a>

```typescript
public resetVnicId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVnicAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVnicAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVnicAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVnicAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVnicAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList">DataOciCoreVnicAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicAttachments">vnicAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList">DataOciCoreVnicAttachmentsVnicAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicIdInput">vnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVnicAttachmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList">DataOciCoreVnicAttachmentsFilterList</a>

---

##### `vnicAttachments`<sup>Required</sup> <a name="vnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicAttachments"></a>

```typescript
public readonly vnicAttachments: DataOciCoreVnicAttachmentsVnicAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList">DataOciCoreVnicAttachmentsVnicAttachmentsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVnicAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `vnicIdInput`<sup>Optional</sup> <a name="vnicIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicIdInput"></a>

```typescript
public readonly vnicIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVnicAttachmentsConfig <a name="DataOciCoreVnicAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVnicAttachmentsConfig: dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#compartment_id DataOciCoreVnicAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#availability_domain DataOciCoreVnicAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#id DataOciCoreVnicAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#instance_id DataOciCoreVnicAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.vnicId">vnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#vnic_id DataOciCoreVnicAttachments#vnic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#compartment_id DataOciCoreVnicAttachments#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#availability_domain DataOciCoreVnicAttachments#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVnicAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#filter DataOciCoreVnicAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#id DataOciCoreVnicAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#instance_id DataOciCoreVnicAttachments#instance_id}.

---

##### `vnicId`<sup>Optional</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#vnic_id DataOciCoreVnicAttachments#vnic_id}.

---

### DataOciCoreVnicAttachmentsFilter <a name="DataOciCoreVnicAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVnicAttachmentsFilter: dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#name DataOciCoreVnicAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#values DataOciCoreVnicAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#regex DataOciCoreVnicAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#name DataOciCoreVnicAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#values DataOciCoreVnicAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#regex DataOciCoreVnicAttachments#regex}.

---

### DataOciCoreVnicAttachmentsVnicAttachments <a name="DataOciCoreVnicAttachmentsVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVnicAttachmentsVnicAttachments: dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments = { ... }
```


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails: dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails = { ... }
```


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails: dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVnicAttachmentsFilterList <a name="DataOciCoreVnicAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVnicAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVnicAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>[]

---


### DataOciCoreVnicAttachmentsFilterOutputReference <a name="DataOciCoreVnicAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVnicAttachmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter">DataOciCoreVnicAttachmentsFilter</a>

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignIpv6Ip`<sup>Required</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```typescript
public readonly assignIpv6Ip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `assignPrivateDnsRecord`<sup>Required</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```typescript
public readonly assignPrivateDnsRecord: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails</a>

---


### DataOciCoreVnicAttachmentsVnicAttachmentsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVnicAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.nicIndex">nicIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanTag">vlanTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments">DataOciCoreVnicAttachmentsVnicAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.createVnicDetails"></a>

```typescript
public readonly createVnicDetails: DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `nicIndex`<sup>Required</sup> <a name="nicIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.nicIndex"></a>

```typescript
public readonly nicIndex: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVnicAttachmentsVnicAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments">DataOciCoreVnicAttachmentsVnicAttachments</a>

---



