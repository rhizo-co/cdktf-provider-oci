# `capacityManagementOccCustomerGroup` Submodule <a name="`capacityManagementOccCustomerGroup` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCustomerGroup <a name="CapacityManagementOccCustomerGroup" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group oci_capacity_management_occ_customer_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup(scope: Construct, id: string, config: CapacityManagementOccCustomerGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList">putCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList">resetCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails">resetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomersList` <a name="putCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList"></a>

```typescript
public putCustomersList(value: IResolvable | CapacityManagementOccCustomerGroupCustomersListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: CapacityManagementOccCustomerGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

---

##### `resetCustomersList` <a name="resetCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList"></a>

```typescript
public resetCustomersList(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleDetails` <a name="resetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails"></a>

```typescript
public resetLifecycleDetails(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccCustomerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccCustomerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCustomerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList">customersList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput">customersListInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput">lifecycleDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customersList`<sup>Required</sup> <a name="customersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList"></a>

```typescript
public readonly customersList: CapacityManagementOccCustomerGroupCustomersListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccCustomerGroupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `customersListInput`<sup>Optional</sup> <a name="customersListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput"></a>

```typescript
public readonly customersListInput: IResolvable | CapacityManagementOccCustomerGroupCustomersListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleDetailsInput`<sup>Optional</sup> <a name="lifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput"></a>

```typescript
public readonly lifecycleDetailsInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CapacityManagementOccCustomerGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCustomerGroupConfig <a name="CapacityManagementOccCustomerGroupConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCustomerGroupConfig: capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList">customersList</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]</code> | customers_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `customersList`<sup>Optional</sup> <a name="customersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList"></a>

```typescript
public readonly customersList: IResolvable | CapacityManagementOccCustomerGroupCustomersListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]

customers_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#customers_list CapacityManagementOccCustomerGroup#customers_list}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccCustomerGroupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#timeouts CapacityManagementOccCustomerGroup#timeouts}

---

### CapacityManagementOccCustomerGroupCustomersListStruct <a name="CapacityManagementOccCustomerGroupCustomersListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCustomerGroupCustomersListStruct: capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

### CapacityManagementOccCustomerGroupTimeouts <a name="CapacityManagementOccCustomerGroupTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCustomerGroupTimeouts: capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCustomerGroupCustomersListStructList <a name="CapacityManagementOccCustomerGroupCustomersListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get"></a>

```typescript
public get(index: number): CapacityManagementOccCustomerGroupCustomersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCustomerGroupCustomersListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>[]

---


### CapacityManagementOccCustomerGroupCustomersListStructOutputReference <a name="CapacityManagementOccCustomerGroupCustomersListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCustomerGroupCustomersListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct">CapacityManagementOccCustomerGroupCustomersListStruct</a>

---


### CapacityManagementOccCustomerGroupTimeoutsOutputReference <a name="CapacityManagementOccCustomerGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCustomerGroup } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCustomerGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

---



