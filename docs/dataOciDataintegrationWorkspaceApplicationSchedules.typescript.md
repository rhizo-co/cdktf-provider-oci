# `dataOciDataintegrationWorkspaceApplicationSchedules` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedules <a name="DataOciDataintegrationWorkspaceApplicationSchedules" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules oci_dataintegration_workspace_application_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceApplicationSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig">DataOciDataintegrationWorkspaceApplicationSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig">DataOciDataintegrationWorkspaceApplicationSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataintegrationWorkspaceApplicationSchedulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataintegrationWorkspaceApplicationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection">scheduleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput">applicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput">identifierInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput">keyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput">typeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier">identifier</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key">key</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type">type</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter"></a>

```typescript
public readonly filter: DataOciDataintegrationWorkspaceApplicationSchedulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a>

---

##### `scheduleSummaryCollection`<sup>Required</sup> <a name="scheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection"></a>

```typescript
public readonly scheduleSummaryCollection: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a>

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput"></a>

```typescript
public readonly applicationKeyInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataintegrationWorkspaceApplicationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput"></a>

```typescript
public readonly identifierInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput"></a>

```typescript
public readonly keyInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput"></a>

```typescript
public readonly typeInput: string[];
```

- *Type:* string[]

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier"></a>

```typescript
public readonly identifier: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesConfig <a name="DataOciDataintegrationWorkspaceApplicationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesConfig: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey">applicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier">identifier</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key">key</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type">type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataintegrationWorkspaceApplicationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#filter DataOciDataintegrationWorkspaceApplicationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier"></a>

```typescript
public readonly identifier: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesFilter <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesFilter: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef = { ... }
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata: dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesFilterList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataintegrationWorkspaceApplicationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>[]

---


### DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataintegrationWorkspaceApplicationSchedulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression">customExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression"></a>

```typescript
public readonly customExpression: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time"></a>

```typescript
public readonly time: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a>

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```typescript
public readonly objectCount: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```typescript
public readonly objectTypeCountList: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```typescript
public readonly aggregator: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```typescript
public readonly countStatistics: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```typescript
public readonly createdByName: string;
```

- *Type:* string

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```typescript
public readonly identifierPath: string;
```

- *Type:* string

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```typescript
public readonly infoFields: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```typescript
public readonly updatedByName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus">objectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `frequencyDetails`<sup>Required</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails"></a>

```typescript
public readonly frequencyDetails: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `isDaylightAdjustmentEnabled`<sup>Required</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled"></a>

```typescript
public readonly isDaylightAdjustmentEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef"></a>

```typescript
public readonly parentRef: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```typescript
public readonly rootDocId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a>

---



