# `osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management oci_os_management_hub_managed_instance_group_attach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput">managedInstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances">managedInstances</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `managedInstancesInput`<sup>Optional</sup> <a name="managedInstancesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput"></a>

```typescript
public readonly managedInstancesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances"></a>

```typescript
public readonly managedInstances: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig: osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances">managedInstances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances"></a>

```typescript
public readonly managedInstances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#work_request_details OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts: osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}.

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails: osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---



