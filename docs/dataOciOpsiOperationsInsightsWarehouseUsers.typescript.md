# `dataOciOpsiOperationsInsightsWarehouseUsers` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouseUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsers <a name="DataOciOpsiOperationsInsightsWarehouseUsers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users oci_opsi_operations_insights_warehouse_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig">DataOciOpsiOperationsInsightsWarehouseUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig">DataOciOpsiOperationsInsightsWarehouseUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiOperationsInsightsWarehouseUsersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouseUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOperationsInsightsWarehouseUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouseUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection">operationsInsightsWarehouseUserSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput">operationsInsightsWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiOperationsInsightsWarehouseUsersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a>

---

##### `operationsInsightsWarehouseUserSummaryCollection`<sup>Required</sup> <a name="operationsInsightsWarehouseUserSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection"></a>

```typescript
public readonly operationsInsightsWarehouseUserSummaryCollection: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiOperationsInsightsWarehouseUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="operationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput"></a>

```typescript
public readonly operationsInsightsWarehouseIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersConfig <a name="DataOciOpsiOperationsInsightsWarehouseUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehouseUsersConfig: dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiOperationsInsightsWarehouseUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#filter DataOciOpsiOperationsInsightsWarehouseUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersFilter <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehouseUsersFilter: dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection: dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection = { ... }
```


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems: dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersFilterList <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsWarehouseUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>[]

---


### DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsWarehouseUsersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword">connectionPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess">isAwrDataAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess">isEmDataAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess">isOpsiDataAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionPassword`<sup>Required</sup> <a name="connectionPassword" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword"></a>

```typescript
public readonly connectionPassword: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAwrDataAccess`<sup>Required</sup> <a name="isAwrDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess"></a>

```typescript
public readonly isAwrDataAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEmDataAccess`<sup>Required</sup> <a name="isEmDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess"></a>

```typescript
public readonly isEmDataAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOpsiDataAccess`<sup>Required</sup> <a name="isOpsiDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess"></a>

```typescript
public readonly isOpsiDataAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a>

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouseUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a>

---



