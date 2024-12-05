# `dataOciOsManagementHubWindowsUpdate` Submodule <a name="`dataOciOsManagementHubWindowsUpdate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubWindowsUpdate <a name="DataOciOsManagementHubWindowsUpdate" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update oci_os_management_hub_windows_update}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate(scope: Construct, id: string, config: DataOciOsManagementHubWindowsUpdateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig">DataOciOsManagementHubWindowsUpdateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig">DataOciOsManagementHubWindowsUpdateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubWindowsUpdate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isConstruct"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubWindowsUpdate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubWindowsUpdate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubWindowsUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubWindowsUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.installable">installable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.installationRequirements">installationRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.isRebootRequiredForInstallation">isRebootRequiredForInstallation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.kbArticleIds">kbArticleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.updateId">updateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.updateType">updateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.windowsUpdateIdInput">windowsUpdateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.windowsUpdateId">windowsUpdateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `installable`<sup>Required</sup> <a name="installable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.installable"></a>

```typescript
public readonly installable: string;
```

- *Type:* string

---

##### `installationRequirements`<sup>Required</sup> <a name="installationRequirements" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.installationRequirements"></a>

```typescript
public readonly installationRequirements: string[];
```

- *Type:* string[]

---

##### `isRebootRequiredForInstallation`<sup>Required</sup> <a name="isRebootRequiredForInstallation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.isRebootRequiredForInstallation"></a>

```typescript
public readonly isRebootRequiredForInstallation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kbArticleIds`<sup>Required</sup> <a name="kbArticleIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.kbArticleIds"></a>

```typescript
public readonly kbArticleIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `updateId`<sup>Required</sup> <a name="updateId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.updateId"></a>

```typescript
public readonly updateId: string;
```

- *Type:* string

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.updateType"></a>

```typescript
public readonly updateType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `windowsUpdateIdInput`<sup>Optional</sup> <a name="windowsUpdateIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.windowsUpdateIdInput"></a>

```typescript
public readonly windowsUpdateIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `windowsUpdateId`<sup>Required</sup> <a name="windowsUpdateId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.windowsUpdateId"></a>

```typescript
public readonly windowsUpdateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubWindowsUpdateConfig <a name="DataOciOsManagementHubWindowsUpdateConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubWindowsUpdate } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubWindowsUpdateConfig: dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.windowsUpdateId">windowsUpdateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update#windows_update_id DataOciOsManagementHubWindowsUpdate#windows_update_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update#id DataOciOsManagementHubWindowsUpdate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `windowsUpdateId`<sup>Required</sup> <a name="windowsUpdateId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.windowsUpdateId"></a>

```typescript
public readonly windowsUpdateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update#windows_update_id DataOciOsManagementHubWindowsUpdate#windows_update_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubWindowsUpdate.DataOciOsManagementHubWindowsUpdateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_windows_update#id DataOciOsManagementHubWindowsUpdate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



