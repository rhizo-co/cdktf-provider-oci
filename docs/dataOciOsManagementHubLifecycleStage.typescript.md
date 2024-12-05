# `dataOciOsManagementHubLifecycleStage` Submodule <a name="`dataOciOsManagementHubLifecycleStage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleStage <a name="DataOciOsManagementHubLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage oci_os_management_hub_lifecycle_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage(scope: Construct, id: string, config: DataOciOsManagementHubLifecycleStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig">DataOciOsManagementHubLifecycleStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig">DataOciOsManagementHubLifecycleStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleStage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubLifecycleStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubLifecycleStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.managedInstanceIds">managedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList">DataOciOsManagementHubLifecycleStageManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.rank">rank</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.softwareSourceId">softwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList">DataOciOsManagementHubLifecycleStageSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageIdInput">lifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: DataOciOsManagementHubLifecycleStageManagedInstanceIdsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList">DataOciOsManagementHubLifecycleStageManagedInstanceIdsList</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: DataOciOsManagementHubLifecycleStageSoftwareSourceIdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList">DataOciOsManagementHubLifecycleStageSoftwareSourceIdList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleStageIdInput`<sup>Optional</sup> <a name="lifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageIdInput"></a>

```typescript
public readonly lifecycleStageIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleStageConfig <a name="DataOciOsManagementHubLifecycleStageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleStageConfig: dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#lifecycle_stage_id DataOciOsManagementHubLifecycleStage#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#id DataOciOsManagementHubLifecycleStage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#lifecycle_stage_id DataOciOsManagementHubLifecycleStage#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_stage#id DataOciOsManagementHubLifecycleStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubLifecycleStageManagedInstanceIds <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleStageManagedInstanceIds: dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds = { ... }
```


### DataOciOsManagementHubLifecycleStageSoftwareSourceId <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleStageSoftwareSourceId: dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleStageManagedInstanceIdsList <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference <a name="DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds">DataOciOsManagementHubLifecycleStageManagedInstanceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleStageManagedInstanceIds;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageManagedInstanceIds">DataOciOsManagementHubLifecycleStageManagedInstanceIds</a>

---


### DataOciOsManagementHubLifecycleStageSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleStage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId">DataOciOsManagementHubLifecycleStageSoftwareSourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleStageSoftwareSourceId;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleStage.DataOciOsManagementHubLifecycleStageSoftwareSourceId">DataOciOsManagementHubLifecycleStageSoftwareSourceId</a>

---



