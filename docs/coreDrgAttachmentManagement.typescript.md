# `coreDrgAttachmentManagement` Submodule <a name="`coreDrgAttachmentManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgAttachmentManagement <a name="CoreDrgAttachmentManagement" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management oci_core_drg_attachment_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

new coreDrgAttachmentManagement.CoreDrgAttachmentManagement(scope: Construct, id: string, config: CoreDrgAttachmentManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig">CoreDrgAttachmentManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig">CoreDrgAttachmentManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails">putNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId">resetDrgRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId">resetExportDrgRouteDistributionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails">resetNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger">resetRemoveExportDrgRouteDistributionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId">resetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkDetails` <a name="putNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails"></a>

```typescript
public putNetworkDetails(value: CoreDrgAttachmentManagementNetworkDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreDrgAttachmentManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDrgRouteTableId` <a name="resetDrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId"></a>

```typescript
public resetDrgRouteTableId(): void
```

##### `resetExportDrgRouteDistributionId` <a name="resetExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId"></a>

```typescript
public resetExportDrgRouteDistributionId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkDetails` <a name="resetNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails"></a>

```typescript
public resetNetworkDetails(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetRemoveExportDrgRouteDistributionTrigger` <a name="resetRemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger"></a>

```typescript
public resetRemoveExportDrgRouteDistributionTrigger(): void
```

##### `resetRouteTableId` <a name="resetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId"></a>

```typescript
public resetRouteTableId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDrgAttachmentManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDrgAttachmentManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgAttachmentManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy">isCrossTenancy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput">attachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput">drgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput">drgRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput">exportDrgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput">networkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput">removeExportDrgRouteDistributionTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput">routeTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId">drgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId">drgRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId">exportDrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger">removeExportDrgRouteDistributionTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isCrossTenancy`<sup>Required</sup> <a name="isCrossTenancy" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy"></a>

```typescript
public readonly isCrossTenancy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails"></a>

```typescript
public readonly networkDetails: CoreDrgAttachmentManagementNetworkDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDrgAttachmentManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a>

---

##### `attachmentTypeInput`<sup>Optional</sup> <a name="attachmentTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput"></a>

```typescript
public readonly attachmentTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `drgIdInput`<sup>Optional</sup> <a name="drgIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput"></a>

```typescript
public readonly drgIdInput: string;
```

- *Type:* string

---

##### `drgRouteTableIdInput`<sup>Optional</sup> <a name="drgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput"></a>

```typescript
public readonly drgRouteTableIdInput: string;
```

- *Type:* string

---

##### `exportDrgRouteDistributionIdInput`<sup>Optional</sup> <a name="exportDrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput"></a>

```typescript
public readonly exportDrgRouteDistributionIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkDetailsInput`<sup>Optional</sup> <a name="networkDetailsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput"></a>

```typescript
public readonly networkDetailsInput: CoreDrgAttachmentManagementNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `removeExportDrgRouteDistributionTriggerInput`<sup>Optional</sup> <a name="removeExportDrgRouteDistributionTriggerInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput"></a>

```typescript
public readonly removeExportDrgRouteDistributionTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput"></a>

```typescript
public readonly routeTableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreDrgAttachmentManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId"></a>

```typescript
public readonly drgRouteTableId: string;
```

- *Type:* string

---

##### `exportDrgRouteDistributionId`<sup>Required</sup> <a name="exportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId"></a>

```typescript
public readonly exportDrgRouteDistributionId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `removeExportDrgRouteDistributionTrigger`<sup>Required</sup> <a name="removeExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger"></a>

```typescript
public readonly removeExportDrgRouteDistributionTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgAttachmentManagementConfig <a name="CoreDrgAttachmentManagementConfig" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

const coreDrgAttachmentManagementConfig: coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType">attachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId">drgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId">drgRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId">exportDrgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger">removeExportDrgRouteDistributionTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId">routeTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}.

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}.

---

##### `drgRouteTableId`<sup>Optional</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId"></a>

```typescript
public readonly drgRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}.

---

##### `exportDrgRouteDistributionId`<sup>Optional</sup> <a name="exportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId"></a>

```typescript
public readonly exportDrgRouteDistributionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkDetails`<sup>Optional</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails"></a>

```typescript
public readonly networkDetails: CoreDrgAttachmentManagementNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_details CoreDrgAttachmentManagement#network_details}

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}.

---

##### `removeExportDrgRouteDistributionTrigger`<sup>Optional</sup> <a name="removeExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger"></a>

```typescript
public readonly removeExportDrgRouteDistributionTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}.

---

##### `routeTableId`<sup>Optional</sup> <a name="routeTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDrgAttachmentManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#timeouts CoreDrgAttachmentManagement#timeouts}

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}.

---

### CoreDrgAttachmentManagementNetworkDetails <a name="CoreDrgAttachmentManagementNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

const coreDrgAttachmentManagementNetworkDetails: coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId">routeTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}.

---

##### `routeTableId`<sup>Optional</sup> <a name="routeTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

### CoreDrgAttachmentManagementTimeouts <a name="CoreDrgAttachmentManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

const coreDrgAttachmentManagementTimeouts: coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgAttachmentManagementNetworkDetailsOutputReference <a name="CoreDrgAttachmentManagementNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

new coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId">resetRouteTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRouteTableId` <a name="resetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId"></a>

```typescript
public resetRouteTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId">ipsecConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput">routeTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipsecConnectionId`<sup>Required</sup> <a name="ipsecConnectionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId"></a>

```typescript
public readonly ipsecConnectionId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput"></a>

```typescript
public readonly routeTableIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDrgAttachmentManagementNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---


### CoreDrgAttachmentManagementTimeoutsOutputReference <a name="CoreDrgAttachmentManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreDrgAttachmentManagement } from 'rhizo-co-terraform-provider-oci'

new coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDrgAttachmentManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

---



