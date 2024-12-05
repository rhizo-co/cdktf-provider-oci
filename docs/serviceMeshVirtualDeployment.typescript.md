# `serviceMeshVirtualDeployment` Submodule <a name="`serviceMeshVirtualDeployment` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualDeployment <a name="ServiceMeshVirtualDeployment" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment oci_service_mesh_virtual_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment(scope: Construct, id: string, config: ServiceMeshVirtualDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig">ServiceMeshVirtualDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig">ServiceMeshVirtualDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging">putAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners">putListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery">putServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging">resetAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners">resetListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery">resetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogging` <a name="putAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging"></a>

```typescript
public putAccessLogging(value: ServiceMeshVirtualDeploymentAccessLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---

##### `putListeners` <a name="putListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners"></a>

```typescript
public putListeners(value: IResolvable | ServiceMeshVirtualDeploymentListeners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]

---

##### `putServiceDiscovery` <a name="putServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery"></a>

```typescript
public putServiceDiscovery(value: ServiceMeshVirtualDeploymentServiceDiscovery): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceMeshVirtualDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---

##### `resetAccessLogging` <a name="resetAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging"></a>

```typescript
public resetAccessLogging(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListeners` <a name="resetListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners"></a>

```typescript
public resetListeners(): void
```

##### `resetServiceDiscovery` <a name="resetServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery"></a>

```typescript
public resetServiceDiscovery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceMeshVirtualDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceMeshVirtualDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput">accessLoggingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput">listenersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput">serviceDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogging`<sup>Required</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging"></a>

```typescript
public readonly accessLogging: ServiceMeshVirtualDeploymentAccessLoggingOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners"></a>

```typescript
public readonly listeners: ServiceMeshVirtualDeploymentListenersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a>

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceMeshVirtualDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `accessLoggingInput`<sup>Optional</sup> <a name="accessLoggingInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput"></a>

```typescript
public readonly accessLoggingInput: ServiceMeshVirtualDeploymentAccessLogging;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenersInput`<sup>Optional</sup> <a name="listenersInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput"></a>

```typescript
public readonly listenersInput: IResolvable | ServiceMeshVirtualDeploymentListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceDiscoveryInput`<sup>Optional</sup> <a name="serviceDiscoveryInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput"></a>

```typescript
public readonly serviceDiscoveryInput: ServiceMeshVirtualDeploymentServiceDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceMeshVirtualDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput"></a>

```typescript
public readonly virtualServiceIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualDeploymentAccessLogging <a name="ServiceMeshVirtualDeploymentAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

const serviceMeshVirtualDeploymentAccessLogging: serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}.

---

### ServiceMeshVirtualDeploymentConfig <a name="ServiceMeshVirtualDeploymentConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

const serviceMeshVirtualDeploymentConfig: serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners">listeners</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}.

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}.

---

##### `accessLogging`<sup>Optional</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging"></a>

```typescript
public readonly accessLogging: ServiceMeshVirtualDeploymentAccessLogging;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners"></a>

```typescript
public readonly listeners: IResolvable | ServiceMeshVirtualDeploymentListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: ServiceMeshVirtualDeploymentServiceDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceMeshVirtualDeploymentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}

---

### ServiceMeshVirtualDeploymentListeners <a name="ServiceMeshVirtualDeploymentListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

const serviceMeshVirtualDeploymentListeners: serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs">idleTimeoutInMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}.

---

##### `idleTimeoutInMs`<sup>Optional</sup> <a name="idleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs"></a>

```typescript
public readonly idleTimeoutInMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}.

---

##### `requestTimeoutInMs`<sup>Optional</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}.

---

### ServiceMeshVirtualDeploymentServiceDiscovery <a name="ServiceMeshVirtualDeploymentServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

const serviceMeshVirtualDeploymentServiceDiscovery: serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}.

---

### ServiceMeshVirtualDeploymentTimeouts <a name="ServiceMeshVirtualDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

const serviceMeshVirtualDeploymentTimeouts: serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualDeploymentAccessLoggingOutputReference <a name="ServiceMeshVirtualDeploymentAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceMeshVirtualDeploymentAccessLogging;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---


### ServiceMeshVirtualDeploymentListenersList <a name="ServiceMeshVirtualDeploymentListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get"></a>

```typescript
public get(index: number): ServiceMeshVirtualDeploymentListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshVirtualDeploymentListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>[]

---


### ServiceMeshVirtualDeploymentListenersOutputReference <a name="ServiceMeshVirtualDeploymentListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs">resetIdleTimeoutInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs">resetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMs` <a name="resetIdleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs"></a>

```typescript
public resetIdleTimeoutInMs(): void
```

##### `resetRequestTimeoutInMs` <a name="resetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs"></a>

```typescript
public resetRequestTimeoutInMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput">idleTimeoutInMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput">requestTimeoutInMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs">idleTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMsInput`<sup>Optional</sup> <a name="idleTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput"></a>

```typescript
public readonly idleTimeoutInMsInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `requestTimeoutInMsInput`<sup>Optional</sup> <a name="requestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput"></a>

```typescript
public readonly requestTimeoutInMsInput: string;
```

- *Type:* string

---

##### `idleTimeoutInMs`<sup>Required</sup> <a name="idleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs"></a>

```typescript
public readonly idleTimeoutInMs: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshVirtualDeploymentListeners;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>

---


### ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference <a name="ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceMeshVirtualDeploymentServiceDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---


### ServiceMeshVirtualDeploymentTimeoutsOutputReference <a name="ServiceMeshVirtualDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceMeshVirtualDeployment } from 'rhizo-co-terraform-provider-oci'

new serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshVirtualDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---



