# `osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management oci_os_management_hub_managed_instance_group_detach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput">managedInstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances">managedInstances</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `managedInstancesInput`<sup>Optional</sup> <a name="managedInstancesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput"></a>

```typescript
public readonly managedInstancesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances"></a>

```typescript
public readonly managedInstances: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig: osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances">managedInstances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances"></a>

```typescript
public readonly managedInstances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#timeouts}

---

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts: osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachManagedInstancesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

---



