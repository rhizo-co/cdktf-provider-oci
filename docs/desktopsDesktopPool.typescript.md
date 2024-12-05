# `desktopsDesktopPool` Submodule <a name="`desktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesktopsDesktopPool <a name="DesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPool(scope: Construct, id: string, config: DesktopsDesktopPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig">DesktopsDesktopPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig">DesktopsDesktopPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy">putAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage">putImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails">putPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions">putSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails">resetPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions">resetSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig">resetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled">resetTimeStartScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled">resetTimeStopScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost">resetUseDedicatedVmHost</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityPolicy` <a name="putAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy"></a>

```typescript
public putAvailabilityPolicy(value: DesktopsDesktopPoolAvailabilityPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putAvailabilityPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `putDevicePolicy` <a name="putDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy"></a>

```typescript
public putDevicePolicy(value: DesktopsDesktopPoolDevicePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `putImage` <a name="putImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage"></a>

```typescript
public putImage(value: DesktopsDesktopPoolImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putImage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: DesktopsDesktopPoolNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `putPrivateAccessDetails` <a name="putPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails"></a>

```typescript
public putPrivateAccessDetails(value: DesktopsDesktopPoolPrivateAccessDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putPrivateAccessDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `putSessionLifecycleActions` <a name="putSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions"></a>

```typescript
public putSessionLifecycleActions(value: DesktopsDesktopPoolSessionLifecycleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putSessionLifecycleActions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig"></a>

```typescript
public putShapeConfig(value: DesktopsDesktopPoolShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts"></a>

```typescript
public putTimeouts(value: DesktopsDesktopPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateAccessDetails` <a name="resetPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetPrivateAccessDetails"></a>

```typescript
public resetPrivateAccessDetails(): void
```

##### `resetSessionLifecycleActions` <a name="resetSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetSessionLifecycleActions"></a>

```typescript
public resetSessionLifecycleActions(): void
```

##### `resetShapeConfig` <a name="resetShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetShapeConfig"></a>

```typescript
public resetShapeConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeStartScheduled` <a name="resetTimeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStartScheduled"></a>

```typescript
public resetTimeStartScheduled(): void
```

##### `resetTimeStopScheduled` <a name="resetTimeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetTimeStopScheduled"></a>

```typescript
public resetTimeStopScheduled(): void
```

##### `resetUseDedicatedVmHost` <a name="resetUseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.resetUseDedicatedVmHost"></a>

```typescript
public resetUseDedicatedVmHost(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

desktopsDesktopPool.DesktopsDesktopPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DesktopsDesktopPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops">activeDesktops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput">arePrivilegedUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput">availabilityPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput">contactDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput">imageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput">isStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput">maximumSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput">privateAccessDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput">sessionLifecycleActionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput">standbySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput">storageBackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput">storageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput">timeStartScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput">timeStopScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput">useDedicatedVmHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails">contactDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled">isStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize">maximumSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize">standbySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled">timeStartScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled">timeStopScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeDesktops`<sup>Required</sup> <a name="activeDesktops" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.activeDesktops"></a>

```typescript
public readonly activeDesktops: number;
```

- *Type:* number

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicy"></a>

```typescript
public readonly availabilityPolicy: DesktopsDesktopPoolAvailabilityPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference">DesktopsDesktopPoolAvailabilityPolicyOutputReference</a>

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: DesktopsDesktopPoolDevicePolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference">DesktopsDesktopPoolDevicePolicyOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.image"></a>

```typescript
public readonly image: DesktopsDesktopPoolImageOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference">DesktopsDesktopPoolImageOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DesktopsDesktopPoolNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference">DesktopsDesktopPoolNetworkConfigurationOutputReference</a>

---

##### `privateAccessDetails`<sup>Required</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetails"></a>

```typescript
public readonly privateAccessDetails: DesktopsDesktopPoolPrivateAccessDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference">DesktopsDesktopPoolPrivateAccessDetailsOutputReference</a>

---

##### `sessionLifecycleActions`<sup>Required</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActions"></a>

```typescript
public readonly sessionLifecycleActions: DesktopsDesktopPoolSessionLifecycleActionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference">DesktopsDesktopPoolSessionLifecycleActionsOutputReference</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DesktopsDesktopPoolShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference">DesktopsDesktopPoolShapeConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeouts"></a>

```typescript
public readonly timeouts: DesktopsDesktopPoolTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference">DesktopsDesktopPoolTimeoutsOutputReference</a>

---

##### `arePrivilegedUsersInput`<sup>Optional</sup> <a name="arePrivilegedUsersInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsersInput"></a>

```typescript
public readonly arePrivilegedUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `availabilityPolicyInput`<sup>Optional</sup> <a name="availabilityPolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityPolicyInput"></a>

```typescript
public readonly availabilityPolicyInput: DesktopsDesktopPoolAvailabilityPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `contactDetailsInput`<sup>Optional</sup> <a name="contactDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetailsInput"></a>

```typescript
public readonly contactDetailsInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.devicePolicyInput"></a>

```typescript
public readonly devicePolicyInput: DesktopsDesktopPoolDevicePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.imageInput"></a>

```typescript
public readonly imageInput: DesktopsDesktopPoolImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---

##### `isStorageEnabledInput`<sup>Optional</sup> <a name="isStorageEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabledInput"></a>

```typescript
public readonly isStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumSizeInput`<sup>Optional</sup> <a name="maximumSizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSizeInput"></a>

```typescript
public readonly maximumSizeInput: number;
```

- *Type:* number

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: DesktopsDesktopPoolNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateAccessDetailsInput`<sup>Optional</sup> <a name="privateAccessDetailsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.privateAccessDetailsInput"></a>

```typescript
public readonly privateAccessDetailsInput: DesktopsDesktopPoolPrivateAccessDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---

##### `sessionLifecycleActionsInput`<sup>Optional</sup> <a name="sessionLifecycleActionsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.sessionLifecycleActionsInput"></a>

```typescript
public readonly sessionLifecycleActionsInput: DesktopsDesktopPoolSessionLifecycleActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeConfigInput"></a>

```typescript
public readonly shapeConfigInput: DesktopsDesktopPoolShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `standbySizeInput`<sup>Optional</sup> <a name="standbySizeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySizeInput"></a>

```typescript
public readonly standbySizeInput: number;
```

- *Type:* number

---

##### `storageBackupPolicyIdInput`<sup>Optional</sup> <a name="storageBackupPolicyIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyIdInput"></a>

```typescript
public readonly storageBackupPolicyIdInput: string;
```

- *Type:* string

---

##### `storageSizeInGbsInput`<sup>Optional</sup> <a name="storageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbsInput"></a>

```typescript
public readonly storageSizeInGbsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DesktopsDesktopPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---

##### `timeStartScheduledInput`<sup>Optional</sup> <a name="timeStartScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduledInput"></a>

```typescript
public readonly timeStartScheduledInput: string;
```

- *Type:* string

---

##### `timeStopScheduledInput`<sup>Optional</sup> <a name="timeStopScheduledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduledInput"></a>

```typescript
public readonly timeStopScheduledInput: string;
```

- *Type:* string

---

##### `useDedicatedVmHostInput`<sup>Optional</sup> <a name="useDedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHostInput"></a>

```typescript
public readonly useDedicatedVmHostInput: string;
```

- *Type:* string

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.arePrivilegedUsers"></a>

```typescript
public readonly arePrivilegedUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.contactDetails"></a>

```typescript
public readonly contactDetails: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.isStorageEnabled"></a>

```typescript
public readonly isStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.maximumSize"></a>

```typescript
public readonly maximumSize: number;
```

- *Type:* number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.standbySize"></a>

```typescript
public readonly standbySize: number;
```

- *Type:* number

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageBackupPolicyId"></a>

```typescript
public readonly storageBackupPolicyId: string;
```

- *Type:* string

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.storageSizeInGbs"></a>

```typescript
public readonly storageSizeInGbs: number;
```

- *Type:* number

---

##### `timeStartScheduled`<sup>Required</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStartScheduled"></a>

```typescript
public readonly timeStartScheduled: string;
```

- *Type:* string

---

##### `timeStopScheduled`<sup>Required</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.timeStopScheduled"></a>

```typescript
public readonly timeStopScheduled: string;
```

- *Type:* string

---

##### `useDedicatedVmHost`<sup>Required</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.useDedicatedVmHost"></a>

```typescript
public readonly useDedicatedVmHost: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DesktopsDesktopPoolAvailabilityPolicy <a name="DesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolAvailabilityPolicy: desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | start_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | stop_schedule block. |

---

##### `startSchedule`<sup>Optional</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.startSchedule"></a>

```typescript
public readonly startSchedule: DesktopsDesktopPoolAvailabilityPolicyStartSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}

---

##### `stopSchedule`<sup>Optional</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy.property.stopSchedule"></a>

```typescript
public readonly stopSchedule: DesktopsDesktopPoolAvailabilityPolicyStopSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}

---

### DesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolAvailabilityPolicyStartSchedule: desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolAvailabilityPolicyStopSchedule: desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}.

---

### DesktopsDesktopPoolConfig <a name="DesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolConfig: desktopsDesktopPool.DesktopsDesktopPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | availability_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails">contactDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | device_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | image block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled">isStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize">maximumSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize">standbySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | private_access_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | session_lifecycle_actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled">timeStartScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled">timeStopScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.arePrivilegedUsers"></a>

```typescript
public readonly arePrivilegedUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}.

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}.

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.availabilityPolicy"></a>

```typescript
public readonly availabilityPolicy: DesktopsDesktopPoolAvailabilityPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

availability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}.

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.contactDetails"></a>

```typescript
public readonly contactDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}.

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: DesktopsDesktopPoolDevicePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.image"></a>

```typescript
public readonly image: DesktopsDesktopPoolImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.isStorageEnabled"></a>

```typescript
public readonly isStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}.

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.maximumSize"></a>

```typescript
public readonly maximumSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DesktopsDesktopPoolNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}.

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.standbySize"></a>

```typescript
public readonly standbySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}.

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageBackupPolicyId"></a>

```typescript
public readonly storageBackupPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}.

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.storageSizeInGbs"></a>

```typescript
public readonly storageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `privateAccessDetails`<sup>Optional</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.privateAccessDetails"></a>

```typescript
public readonly privateAccessDetails: DesktopsDesktopPoolPrivateAccessDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

private_access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}

---

##### `sessionLifecycleActions`<sup>Optional</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.sessionLifecycleActions"></a>

```typescript
public readonly sessionLifecycleActions: DesktopsDesktopPoolSessionLifecycleActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

session_lifecycle_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DesktopsDesktopPoolShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DesktopsDesktopPoolTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}

---

##### `timeStartScheduled`<sup>Optional</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStartScheduled"></a>

```typescript
public readonly timeStartScheduled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}.

---

##### `timeStopScheduled`<sup>Optional</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.timeStopScheduled"></a>

```typescript
public readonly timeStopScheduled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}.

---

##### `useDedicatedVmHost`<sup>Optional</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolConfig.property.useDedicatedVmHost"></a>

```typescript
public readonly useDedicatedVmHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}.

---

### DesktopsDesktopPoolDevicePolicy <a name="DesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolDevicePolicy: desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode">audioMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode">cdmMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled">isPointerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}. |

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.audioMode"></a>

```typescript
public readonly audioMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}.

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.cdmMode"></a>

```typescript
public readonly cdmMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}.

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}.

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isDisplayEnabled"></a>

```typescript
public readonly isDisplayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}.

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isKeyboardEnabled"></a>

```typescript
public readonly isKeyboardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}.

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPointerEnabled"></a>

```typescript
public readonly isPointerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}.

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy.property.isPrintingEnabled"></a>

```typescript
public readonly isPrintingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}.

---

### DesktopsDesktopPoolImage <a name="DesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolImage: desktopsDesktopPool.DesktopsDesktopPoolImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}. |

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}.

---

### DesktopsDesktopPoolNetworkConfiguration <a name="DesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolNetworkConfiguration: desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}.

---

### DesktopsDesktopPoolPrivateAccessDetails <a name="DesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolPrivateAccessDetails: desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}.

---

### DesktopsDesktopPoolSessionLifecycleActions <a name="DesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolSessionLifecycleActions: desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | disconnect block. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | inactivity block. |

---

##### `disconnect`<sup>Optional</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.disconnect"></a>

```typescript
public readonly disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnect;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

disconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}

---

##### `inactivity`<sup>Optional</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions.property.inactivity"></a>

```typescript
public readonly inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

inactivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}

---

### DesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolSessionLifecycleActionsDisconnect: desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `gracePeriodInMinutes`<sup>Optional</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolSessionLifecycleActionsInactivity: desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}.

---

##### `gracePeriodInMinutes`<sup>Optional</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}.

---

### DesktopsDesktopPoolShapeConfig <a name="DesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolShapeConfig: desktopsDesktopPool.DesktopsDesktopPoolShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus">ocpus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}. |

---

##### `baselineOcpuUtilization`<sup>Optional</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.baselineOcpuUtilization"></a>

```typescript
public readonly baselineOcpuUtilization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}.

---

### DesktopsDesktopPoolTimeouts <a name="DesktopsDesktopPoolTimeouts" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

const desktopsDesktopPoolTimeouts: desktopsDesktopPool.DesktopsDesktopPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule">putStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule">putStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule">resetStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule">resetStopSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartSchedule` <a name="putStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule"></a>

```typescript
public putStartSchedule(value: DesktopsDesktopPoolAvailabilityPolicyStartSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStartSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `putStopSchedule` <a name="putStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule"></a>

```typescript
public putStopSchedule(value: DesktopsDesktopPoolAvailabilityPolicyStopSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.putStopSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `resetStartSchedule` <a name="resetStartSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStartSchedule"></a>

```typescript
public resetStartSchedule(): void
```

##### `resetStopSchedule` <a name="resetStopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.resetStopSchedule"></a>

```typescript
public resetStopSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput">startScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput">stopScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```typescript
public readonly startSchedule: DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```typescript
public readonly stopSchedule: DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference">DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference</a>

---

##### `startScheduleInput`<sup>Optional</sup> <a name="startScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startScheduleInput"></a>

```typescript
public readonly startScheduleInput: DesktopsDesktopPoolAvailabilityPolicyStartSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---

##### `stopScheduleInput`<sup>Optional</sup> <a name="stopScheduleInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopScheduleInput"></a>

```typescript
public readonly stopScheduleInput: DesktopsDesktopPoolAvailabilityPolicyStopSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolAvailabilityPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicy">DesktopsDesktopPoolAvailabilityPolicy</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolAvailabilityPolicyStartSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStartSchedule">DesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolAvailabilityPolicyStopSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolAvailabilityPolicyStopSchedule">DesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DesktopsDesktopPoolDevicePolicyOutputReference <a name="DesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput">audioModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput">cdmModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput">clipboardModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput">isDisplayEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput">isKeyboardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput">isPointerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput">isPrintingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">audioMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">cdmMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">isPointerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioModeInput`<sup>Optional</sup> <a name="audioModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioModeInput"></a>

```typescript
public readonly audioModeInput: string;
```

- *Type:* string

---

##### `cdmModeInput`<sup>Optional</sup> <a name="cdmModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmModeInput"></a>

```typescript
public readonly cdmModeInput: string;
```

- *Type:* string

---

##### `clipboardModeInput`<sup>Optional</sup> <a name="clipboardModeInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardModeInput"></a>

```typescript
public readonly clipboardModeInput: string;
```

- *Type:* string

---

##### `isDisplayEnabledInput`<sup>Optional</sup> <a name="isDisplayEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabledInput"></a>

```typescript
public readonly isDisplayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isKeyboardEnabledInput`<sup>Optional</sup> <a name="isKeyboardEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabledInput"></a>

```typescript
public readonly isKeyboardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPointerEnabledInput`<sup>Optional</sup> <a name="isPointerEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabledInput"></a>

```typescript
public readonly isPointerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrintingEnabledInput`<sup>Optional</sup> <a name="isPrintingEnabledInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabledInput"></a>

```typescript
public readonly isPrintingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```typescript
public readonly audioMode: string;
```

- *Type:* string

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```typescript
public readonly cdmMode: string;
```

- *Type:* string

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```typescript
public readonly isDisplayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```typescript
public readonly isKeyboardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```typescript
public readonly isPointerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```typescript
public readonly isPrintingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolDevicePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolDevicePolicy">DesktopsDesktopPoolDevicePolicy</a>

---


### DesktopsDesktopPoolImageOutputReference <a name="DesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolImage">DesktopsDesktopPoolImage</a>

---


### DesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolNetworkConfiguration">DesktopsDesktopPoolNetworkConfiguration</a>

---


### DesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">endpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```typescript
public readonly endpointFqdn: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolPrivateAccessDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolPrivateAccessDetails">DesktopsDesktopPoolPrivateAccessDetails</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes">resetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriodInMinutes` <a name="resetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resetGracePeriodInMinutes"></a>

```typescript
public resetGracePeriodInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput">gracePeriodInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `gracePeriodInMinutesInput`<sup>Optional</sup> <a name="gracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutesInput"></a>

```typescript
public readonly gracePeriodInMinutesInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolSessionLifecycleActionsDisconnect;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes">resetGracePeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriodInMinutes` <a name="resetGracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resetGracePeriodInMinutes"></a>

```typescript
public resetGracePeriodInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput">gracePeriodInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `gracePeriodInMinutesInput`<sup>Optional</sup> <a name="gracePeriodInMinutesInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutesInput"></a>

```typescript
public readonly gracePeriodInMinutesInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolSessionLifecycleActionsInactivity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect">putDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity">putInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect">resetDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity">resetInactivity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisconnect` <a name="putDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect"></a>

```typescript
public putDisconnect(value: DesktopsDesktopPoolSessionLifecycleActionsDisconnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putDisconnect.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `putInactivity` <a name="putInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity"></a>

```typescript
public putInactivity(value: DesktopsDesktopPoolSessionLifecycleActionsInactivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.putInactivity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `resetDisconnect` <a name="resetDisconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetDisconnect"></a>

```typescript
public resetDisconnect(): void
```

##### `resetInactivity` <a name="resetInactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.resetInactivity"></a>

```typescript
public resetInactivity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput">disconnectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput">inactivityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```typescript
public readonly disconnect: DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference">DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```typescript
public readonly inactivity: DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference">DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference</a>

---

##### `disconnectInput`<sup>Optional</sup> <a name="disconnectInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnectInput"></a>

```typescript
public readonly disconnectInput: DesktopsDesktopPoolSessionLifecycleActionsDisconnect;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsDisconnect">DesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---

##### `inactivityInput`<sup>Optional</sup> <a name="inactivityInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivityInput"></a>

```typescript
public readonly inactivityInput: DesktopsDesktopPoolSessionLifecycleActionsInactivity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsInactivity">DesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolSessionLifecycleActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolSessionLifecycleActions">DesktopsDesktopPoolSessionLifecycleActions</a>

---


### DesktopsDesktopPoolShapeConfigOutputReference <a name="DesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization">resetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineOcpuUtilization` <a name="resetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```typescript
public resetBaselineOcpuUtilization(): void
```

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baselineOcpuUtilizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baselineOcpuUtilizationInput`<sup>Optional</sup> <a name="baselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```typescript
public readonly baselineOcpuUtilizationInput: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: string;
```

- *Type:* string

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: string;
```

- *Type:* string

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```typescript
public readonly baselineOcpuUtilization: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: string;
```

- *Type:* string

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesktopsDesktopPoolShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolShapeConfig">DesktopsDesktopPoolShapeConfig</a>

---


### DesktopsDesktopPoolTimeoutsOutputReference <a name="DesktopsDesktopPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { desktopsDesktopPool } from 'rhizo-co-terraform-provider-oci'

new desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesktopsDesktopPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.desktopsDesktopPool.DesktopsDesktopPoolTimeouts">DesktopsDesktopPoolTimeouts</a>

---



