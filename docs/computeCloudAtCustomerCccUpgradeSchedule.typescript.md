# `computeCloudAtCustomerCccUpgradeSchedule` Submodule <a name="`computeCloudAtCustomerCccUpgradeSchedule` Submodule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCloudAtCustomerCccUpgradeSchedule <a name="ComputeCloudAtCustomerCccUpgradeSchedule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

new computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule(scope: Construct, id: string, config: ComputeCloudAtCustomerCccUpgradeScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig">ComputeCloudAtCustomerCccUpgradeScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig">ComputeCloudAtCustomerCccUpgradeScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvents` <a name="putEvents" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents"></a>

```typescript
public putEvents(value: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleEvents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeCloudAtCustomerCccUpgradeScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeCloudAtCustomerCccUpgradeSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeCloudAtCustomerCccUpgradeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCloudAtCustomerCccUpgradeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events">events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds">infrastructureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput">eventsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events"></a>

```typescript
public readonly events: ComputeCloudAtCustomerCccUpgradeScheduleEventsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a>

---

##### `infrastructureIds`<sup>Required</sup> <a name="infrastructureIds" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds"></a>

```typescript
public readonly infrastructureIds: string[];
```

- *Type:* string[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput"></a>

```typescript
public readonly eventsInput: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleConfig <a name="ComputeCloudAtCustomerCccUpgradeScheduleConfig" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

const computeCloudAtCustomerCccUpgradeScheduleConfig: computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events">events</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]</code> | events block. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}.

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events"></a>

```typescript
public readonly events: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#events ComputeCloudAtCustomerCccUpgradeSchedule#events}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#timeouts ComputeCloudAtCustomerCccUpgradeSchedule#timeouts}

---

### ComputeCloudAtCustomerCccUpgradeScheduleEvents <a name="ComputeCloudAtCustomerCccUpgradeScheduleEvents" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

const computeCloudAtCustomerCccUpgradeScheduleEvents: computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration">scheduleEventDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences">scheduleEventRecurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}. |

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `scheduleEventDuration`<sup>Required</sup> <a name="scheduleEventDuration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration"></a>

```typescript
public readonly scheduleEventDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}.

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}.

---

##### `scheduleEventRecurrences`<sup>Optional</sup> <a name="scheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences"></a>

```typescript
public readonly scheduleEventRecurrences: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}.

---

### ComputeCloudAtCustomerCccUpgradeScheduleTimeouts <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

const computeCloudAtCustomerCccUpgradeScheduleTimeouts: computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleEventsList <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

new computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get"></a>

```typescript
public get(index: number): ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>[]

---


### ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

new computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences">resetScheduleEventRecurrences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduleEventRecurrences` <a name="resetScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences"></a>

```typescript
public resetScheduleEventRecurrences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput">scheduleEventDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput">scheduleEventRecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration">scheduleEventDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences">scheduleEventRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `scheduleEventDurationInput`<sup>Optional</sup> <a name="scheduleEventDurationInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput"></a>

```typescript
public readonly scheduleEventDurationInput: string;
```

- *Type:* string

---

##### `scheduleEventRecurrencesInput`<sup>Optional</sup> <a name="scheduleEventRecurrencesInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput"></a>

```typescript
public readonly scheduleEventRecurrencesInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `scheduleEventDuration`<sup>Required</sup> <a name="scheduleEventDuration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration"></a>

```typescript
public readonly scheduleEventDuration: string;
```

- *Type:* string

---

##### `scheduleEventRecurrences`<sup>Required</sup> <a name="scheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences"></a>

```typescript
public readonly scheduleEventRecurrences: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleEvents;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>

---


### ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeCloudAtCustomerCccUpgradeSchedule } from 'rhizo-co-terraform-provider-oci'

new computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeCloudAtCustomerCccUpgradeScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

---



