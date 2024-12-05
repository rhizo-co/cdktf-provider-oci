# `serviceMeshIngressGatewayRouteTable` Submodule <a name="`serviceMeshIngressGatewayRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGatewayRouteTable <a name="ServiceMeshIngressGatewayRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable(scope: Construct, id: string, config: ServiceMeshIngressGatewayRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig">ServiceMeshIngressGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig">ServiceMeshIngressGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules">putRouteRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRouteRules` <a name="putRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules"></a>

```typescript
public putRouteRules(value: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceMeshIngressGatewayRouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceMeshIngressGatewayRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceMeshIngressGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput">ingressGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput">routeRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId">ingressGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules"></a>

```typescript
public readonly routeRules: ServiceMeshIngressGatewayRouteTableRouteRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressGatewayIdInput`<sup>Optional</sup> <a name="ingressGatewayIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput"></a>

```typescript
public readonly ingressGatewayIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `routeRulesInput`<sup>Optional</sup> <a name="routeRulesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput"></a>

```typescript
public readonly routeRulesInput: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceMeshIngressGatewayRouteTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId"></a>

```typescript
public readonly ingressGatewayId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayRouteTableConfig <a name="ServiceMeshIngressGatewayRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const serviceMeshIngressGatewayRouteTableConfig: serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId">ingressGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules">routeRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}.

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId"></a>

```typescript
public readonly ingressGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules"></a>

```typescript
public readonly routeRules: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#route_rules ServiceMeshIngressGatewayRouteTable#route_rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceMeshIngressGatewayRouteTableTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#timeouts ServiceMeshIngressGatewayRouteTable#timeouts}

---

### ServiceMeshIngressGatewayRouteTableRouteRules <a name="ServiceMeshIngressGatewayRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const serviceMeshIngressGatewayRouteTableRouteRules: serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost">ingressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | ingress_gateway_host block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc">isGrpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled">isHostRewriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled">isPathRewriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType">pathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#destinations ServiceMeshIngressGatewayRouteTable#destinations}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}.

---

##### `ingressGatewayHost`<sup>Optional</sup> <a name="ingressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost"></a>

```typescript
public readonly ingressGatewayHost: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

ingress_gateway_host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_host ServiceMeshIngressGatewayRouteTable#ingress_gateway_host}

---

##### `isGrpc`<sup>Optional</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc"></a>

```typescript
public readonly isGrpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}.

---

##### `isHostRewriteEnabled`<sup>Optional</sup> <a name="isHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled"></a>

```typescript
public readonly isHostRewriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}.

---

##### `isPathRewriteEnabled`<sup>Optional</sup> <a name="isPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled"></a>

```typescript
public readonly isPathRewriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}.

---

##### `pathType`<sup>Optional</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType"></a>

```typescript
public readonly pathType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}.

---

##### `requestTimeoutInMs`<sup>Optional</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinations <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const serviceMeshIngressGatewayRouteTableRouteRulesDestinations: serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}. |

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const serviceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost: serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

### ServiceMeshIngressGatewayRouteTableTimeouts <a name="ServiceMeshIngressGatewayRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

const serviceMeshIngressGatewayRouteTableTimeouts: serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get"></a>

```typescript
public get(index: number): ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]

---


### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetWeight` <a name="resetWeight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput"></a>

```typescript
public readonly virtualServiceIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```typescript
public readonly virtualServiceId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRulesDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>

---


### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---


### ServiceMeshIngressGatewayRouteTableRouteRulesList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get"></a>

```typescript
public get(index: number): ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>[]

---


### ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost">putIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost">resetIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc">resetIsGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled">resetIsHostRewriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled">resetIsPathRewriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType">resetPathType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">resetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]

---

##### `putIngressGatewayHost` <a name="putIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost"></a>

```typescript
public putIngressGatewayHost(value: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---

##### `resetIngressGatewayHost` <a name="resetIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost"></a>

```typescript
public resetIngressGatewayHost(): void
```

##### `resetIsGrpc` <a name="resetIsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```typescript
public resetIsGrpc(): void
```

##### `resetIsHostRewriteEnabled` <a name="resetIsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled"></a>

```typescript
public resetIsHostRewriteEnabled(): void
```

##### `resetIsPathRewriteEnabled` <a name="resetIsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled"></a>

```typescript
public resetIsPathRewriteEnabled(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPathType` <a name="resetPathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType"></a>

```typescript
public resetPathType(): void
```

##### `resetRequestTimeoutInMs` <a name="resetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```typescript
public resetRequestTimeoutInMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost">ingressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput">ingressGatewayHostInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput">isGrpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput">isHostRewriteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput">isPathRewriteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput">pathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">requestTimeoutInMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled">isHostRewriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled">isPathRewriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a>

---

##### `ingressGatewayHost`<sup>Required</sup> <a name="ingressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost"></a>

```typescript
public readonly ingressGatewayHost: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations">ServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>[]

---

##### `ingressGatewayHostInput`<sup>Optional</sup> <a name="ingressGatewayHostInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput"></a>

```typescript
public readonly ingressGatewayHostInput: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---

##### `isGrpcInput`<sup>Optional</sup> <a name="isGrpcInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```typescript
public readonly isGrpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHostRewriteEnabledInput`<sup>Optional</sup> <a name="isHostRewriteEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput"></a>

```typescript
public readonly isHostRewriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPathRewriteEnabledInput`<sup>Optional</sup> <a name="isPathRewriteEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput"></a>

```typescript
public readonly isPathRewriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pathTypeInput`<sup>Optional</sup> <a name="pathTypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```typescript
public readonly pathTypeInput: string;
```

- *Type:* string

---

##### `requestTimeoutInMsInput`<sup>Optional</sup> <a name="requestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```typescript
public readonly requestTimeoutInMsInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```typescript
public readonly isGrpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHostRewriteEnabled`<sup>Required</sup> <a name="isHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```typescript
public readonly isHostRewriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPathRewriteEnabled`<sup>Required</sup> <a name="isPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```typescript
public readonly isPathRewriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType"></a>

```typescript
public readonly pathType: string;
```

- *Type:* string

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```typescript
public readonly requestTimeoutInMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshIngressGatewayRouteTableRouteRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules">ServiceMeshIngressGatewayRouteTableRouteRules</a>

---


### ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference <a name="ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceMeshIngressGatewayRouteTable } from 'rhizo-co-terraform-provider-oci'

new serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceMeshIngressGatewayRouteTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

---



