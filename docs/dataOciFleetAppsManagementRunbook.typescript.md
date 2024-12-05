# `dataOciFleetAppsManagementRunbook` Submodule <a name="`dataOciFleetAppsManagementRunbook` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementRunbook <a name="DataOciFleetAppsManagementRunbook" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook oci_fleet_apps_management_runbook}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook(scope: Construct, id: string, config: DataOciFleetAppsManagementRunbookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig">DataOciFleetAppsManagementRunbookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig">DataOciFleetAppsManagementRunbookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementRunbook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations">associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime">estimatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance">runbookRelevance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput">runbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId">runbookId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations"></a>

```typescript
public readonly associations: DataOciFleetAppsManagementRunbookAssociationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedTime`<sup>Required</sup> <a name="estimatedTime" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime"></a>

```typescript
public readonly estimatedTime: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `runbookRelevance`<sup>Required</sup> <a name="runbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance"></a>

```typescript
public readonly runbookRelevance: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `runbookIdInput`<sup>Optional</sup> <a name="runbookIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput"></a>

```typescript
public readonly runbookIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId"></a>

```typescript
public readonly runbookId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementRunbookAssociations <a name="DataOciFleetAppsManagementRunbookAssociations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociations: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsGroups <a name="DataOciFleetAppsManagementRunbookAssociationsGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsGroups: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsGroupsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsGroupsProperties: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasks <a name="DataOciFleetAppsManagementRunbookAssociationsTasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasks: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksStepProperties: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables = { ... }
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties = { ... }
```


### DataOciFleetAppsManagementRunbookConfig <a name="DataOciFleetAppsManagementRunbookConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbookConfig: dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId">runbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId"></a>

```typescript
public readonly runbookId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow">workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow"></a>

```typescript
public readonly workflow: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps"></a>

```typescript
public readonly steps: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps">steps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps"></a>

```typescript
public readonly steps: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsGroupsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsList <a name="DataOciFleetAppsManagementRunbookAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails">executionWorkflowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionWorkflowDetails`<sup>Required</sup> <a name="executionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails"></a>

```typescript
public readonly executionWorkflowDetails: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups"></a>

```typescript
public readonly groups: DataOciFleetAppsManagementRunbookAssociationsGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks"></a>

```typescript
public readonly tasks: DataOciFleetAppsManagementRunbookAssociationsTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties">stepProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails">taskRecordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a>

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `stepProperties`<sup>Required</sup> <a name="stepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties"></a>

```typescript
public readonly stepProperties: DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a>

---

##### `taskRecordDetails`<sup>Required</sup> <a name="taskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails"></a>

```typescript
public readonly taskRecordDetails: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails">outputVariableDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputVariableDetails`<sup>Required</sup> <a name="outputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails"></a>

```typescript
public readonly outputVariableDetails: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName">outputVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputVariableName`<sup>Required</sup> <a name="outputVariableName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName"></a>

```typescript
public readonly outputVariableName: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">executionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```typescript
public readonly content: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```typescript
public readonly variables: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">outputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```typescript
public readonly outputVariables: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails">executionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled">isCopyToLibraryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId">taskRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionDetails`<sup>Required</sup> <a name="executionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails"></a>

```typescript
public readonly executionDetails: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a>

---

##### `isCopyToLibraryEnabled`<sup>Required</sup> <a name="isCopyToLibraryEnabled" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled"></a>

```typescript
public readonly isCopyToLibraryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `taskRecordId`<sup>Required</sup> <a name="taskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId"></a>

```typescript
public readonly taskRecordId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbook } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a>

---



