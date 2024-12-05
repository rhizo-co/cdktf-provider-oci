# `dataOciCapacityManagementOccCustomerGroups` Submodule <a name="`dataOciCapacityManagementOccCustomerGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCustomerGroups <a name="DataOciCapacityManagementOccCustomerGroups" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups oci_capacity_management_occ_customer_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups(scope: Construct, id: string, config: DataOciCapacityManagementOccCustomerGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig">DataOciCapacityManagementOccCustomerGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig">DataOciCapacityManagementOccCustomerGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementOccCustomerGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCustomerGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCustomerGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccCustomerGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccCustomerGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCustomerGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList">DataOciCapacityManagementOccCustomerGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.occCustomerGroupCollection">occCustomerGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementOccCustomerGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList">DataOciCapacityManagementOccCustomerGroupsFilterList</a>

---

##### `occCustomerGroupCollection`<sup>Required</sup> <a name="occCustomerGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.occCustomerGroupCollection"></a>

```typescript
public readonly occCustomerGroupCollection: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementOccCustomerGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCustomerGroupsConfig <a name="DataOciCapacityManagementOccCustomerGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCustomerGroupsConfig: dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementOccCustomerGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#filter DataOciCapacityManagementOccCustomerGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}.

---

### DataOciCapacityManagementOccCustomerGroupsFilter <a name="DataOciCapacityManagementOccCustomerGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCustomerGroupsFilter: dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#name DataOciCapacityManagementOccCustomerGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#values DataOciCapacityManagementOccCustomerGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#regex DataOciCapacityManagementOccCustomerGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#name DataOciCapacityManagementOccCustomerGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#values DataOciCapacityManagementOccCustomerGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#regex DataOciCapacityManagementOccCustomerGroups#regex}.

---

### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection: dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection = { ... }
```


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems: dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems = { ... }
```


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct: dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCustomerGroupsFilterList <a name="DataOciCapacityManagementOccCustomerGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCustomerGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccCustomerGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>[]

---


### DataOciCapacityManagementOccCustomerGroupsFilterOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccCustomerGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.customersList">customersList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `customersList`<sup>Required</sup> <a name="customersList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.customersList"></a>

```typescript
public readonly customersList: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCustomerGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection</a>

---



