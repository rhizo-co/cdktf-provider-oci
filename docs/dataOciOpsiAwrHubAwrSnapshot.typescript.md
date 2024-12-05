# `dataOciOpsiAwrHubAwrSnapshot` Submodule <a name="`dataOciOpsiAwrHubAwrSnapshot` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSnapshot <a name="DataOciOpsiAwrHubAwrSnapshot" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot oci_opsi_awr_hub_awr_snapshot}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot(scope: Construct, id: string, config: DataOciOpsiAwrHubAwrSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig">DataOciOpsiAwrHubAwrSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig">DataOciOpsiAwrHubAwrSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isConstruct"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformElement"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubAwrSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList">DataOciOpsiAwrHubAwrSnapshotItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrHubIdInput">awrHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrSourceDatabaseIdentifierInput">awrSourceDatabaseIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.items"></a>

```typescript
public readonly items: DataOciOpsiAwrHubAwrSnapshotItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList">DataOciOpsiAwrHubAwrSnapshotItemsList</a>

---

##### `awrHubIdInput`<sup>Optional</sup> <a name="awrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrHubIdInput"></a>

```typescript
public readonly awrHubIdInput: string;
```

- *Type:* string

---

##### `awrSourceDatabaseIdentifierInput`<sup>Optional</sup> <a name="awrSourceDatabaseIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrSourceDatabaseIdentifierInput"></a>

```typescript
public readonly awrSourceDatabaseIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.awrSourceDatabaseIdentifier"></a>

```typescript
public readonly awrSourceDatabaseIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSnapshotConfig <a name="DataOciOpsiAwrHubAwrSnapshotConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotConfig: dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.awrHubId">awrHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#awr_hub_id DataOciOpsiAwrHubAwrSnapshot#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshot#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#id DataOciOpsiAwrHubAwrSnapshot#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshot#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshot#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#awr_hub_id DataOciOpsiAwrHubAwrSnapshot#awr_hub_id}.

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.awrSourceDatabaseIdentifier"></a>

```typescript
public readonly awrSourceDatabaseIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshot#awr_source_database_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#id DataOciOpsiAwrHubAwrSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshot#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshot#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshot#time_less_than_or_equal_to}.

---

### DataOciOpsiAwrHubAwrSnapshotItems <a name="DataOciOpsiAwrHubAwrSnapshotItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItems.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotItems: dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSnapshotItemsList <a name="DataOciOpsiAwrHubAwrSnapshotItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSnapshotItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshot } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.errorCount">errorCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.instanceNumber">instanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeDbStartup">timeDbStartup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeSnapshotBegin">timeSnapshotBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeSnapshotEnd">timeSnapshotEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItems">DataOciOpsiAwrHubAwrSnapshotItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.awrSourceDatabaseId"></a>

```typescript
public readonly awrSourceDatabaseId: string;
```

- *Type:* string

---

##### `errorCount`<sup>Required</sup> <a name="errorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.errorCount"></a>

```typescript
public readonly errorCount: string;
```

- *Type:* string

---

##### `instanceNumber`<sup>Required</sup> <a name="instanceNumber" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.instanceNumber"></a>

```typescript
public readonly instanceNumber: number;
```

- *Type:* number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: number;
```

- *Type:* number

---

##### `timeDbStartup`<sup>Required</sup> <a name="timeDbStartup" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeDbStartup"></a>

```typescript
public readonly timeDbStartup: string;
```

- *Type:* string

---

##### `timeSnapshotBegin`<sup>Required</sup> <a name="timeSnapshotBegin" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeSnapshotBegin"></a>

```typescript
public readonly timeSnapshotBegin: string;
```

- *Type:* string

---

##### `timeSnapshotEnd`<sup>Required</sup> <a name="timeSnapshotEnd" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.timeSnapshotEnd"></a>

```typescript
public readonly timeSnapshotEnd: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubAwrSnapshotItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshot.DataOciOpsiAwrHubAwrSnapshotItems">DataOciOpsiAwrHubAwrSnapshotItems</a>

---



