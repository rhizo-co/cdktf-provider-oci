# `networkLoadBalancerNetworkLoadBalancer` Submodule <a name="`networkLoadBalancerNetworkLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancer <a name="NetworkLoadBalancerNetworkLoadBalancer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer oci_network_load_balancer_network_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer(scope: Construct, id: string, config: NetworkLoadBalancerNetworkLoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig">NetworkLoadBalancerNetworkLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig">NetworkLoadBalancerNetworkLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps">putReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedIpv6">resetAssignedIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedPrivateIpv4">resetAssignedPrivateIpv4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPreserveSourceDestination">resetIsPreserveSourceDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPrivate">resetIsPrivate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsSymmetricHashEnabled">resetIsSymmetricHashEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNlbIpVersion">resetNlbIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetReservedIps">resetReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSubnetIpv6Cidr">resetSubnetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReservedIps` <a name="putReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps"></a>

```typescript
public putReservedIps(value: IResolvable | NetworkLoadBalancerNetworkLoadBalancerReservedIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkLoadBalancerNetworkLoadBalancerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---

##### `resetAssignedIpv6` <a name="resetAssignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedIpv6"></a>

```typescript
public resetAssignedIpv6(): void
```

##### `resetAssignedPrivateIpv4` <a name="resetAssignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetAssignedPrivateIpv4"></a>

```typescript
public resetAssignedPrivateIpv4(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPreserveSourceDestination` <a name="resetIsPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPreserveSourceDestination"></a>

```typescript
public resetIsPreserveSourceDestination(): void
```

##### `resetIsPrivate` <a name="resetIsPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsPrivate"></a>

```typescript
public resetIsPrivate(): void
```

##### `resetIsSymmetricHashEnabled` <a name="resetIsSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetIsSymmetricHashEnabled"></a>

```typescript
public resetIsSymmetricHashEnabled(): void
```

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNetworkSecurityGroupIds"></a>

```typescript
public resetNetworkSecurityGroupIds(): void
```

##### `resetNlbIpVersion` <a name="resetNlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetNlbIpVersion"></a>

```typescript
public resetNlbIpVersion(): void
```

##### `resetReservedIps` <a name="resetReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetReservedIps"></a>

```typescript
public resetReservedIps(): void
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSecurityAttributes"></a>

```typescript
public resetSecurityAttributes(): void
```

##### `resetSubnetIpv6Cidr` <a name="resetSubnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetSubnetIpv6Cidr"></a>

```typescript
public resetSubnetIpv6Cidr(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkLoadBalancerNetworkLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIps">reservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList">NetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6Input">assignedIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4Input">assignedPrivateIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestinationInput">isPreserveSourceDestinationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivateInput">isPrivateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabledInput">isSymmetricHashEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersionInput">nlbIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIpsInput">reservedIpsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributesInput">securityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6CidrInput">subnetIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6">assignedIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion">nlbIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: NetworkLoadBalancerNetworkLoadBalancerIpAddressesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIps"></a>

```typescript
public readonly reservedIps: NetworkLoadBalancerNetworkLoadBalancerReservedIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList">NetworkLoadBalancerNetworkLoadBalancerReservedIpsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `assignedIpv6Input`<sup>Optional</sup> <a name="assignedIpv6Input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6Input"></a>

```typescript
public readonly assignedIpv6Input: string;
```

- *Type:* string

---

##### `assignedPrivateIpv4Input`<sup>Optional</sup> <a name="assignedPrivateIpv4Input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4Input"></a>

```typescript
public readonly assignedPrivateIpv4Input: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPreserveSourceDestinationInput`<sup>Optional</sup> <a name="isPreserveSourceDestinationInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestinationInput"></a>

```typescript
public readonly isPreserveSourceDestinationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivateInput"></a>

```typescript
public readonly isPrivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSymmetricHashEnabledInput`<sup>Optional</sup> <a name="isSymmetricHashEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabledInput"></a>

```typescript
public readonly isSymmetricHashEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIdsInput"></a>

```typescript
public readonly networkSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `nlbIpVersionInput`<sup>Optional</sup> <a name="nlbIpVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersionInput"></a>

```typescript
public readonly nlbIpVersionInput: string;
```

- *Type:* string

---

##### `reservedIpsInput`<sup>Optional</sup> <a name="reservedIpsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.reservedIpsInput"></a>

```typescript
public readonly reservedIpsInput: IResolvable | NetworkLoadBalancerNetworkLoadBalancerReservedIps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributesInput"></a>

```typescript
public readonly securityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetIpv6CidrInput`<sup>Optional</sup> <a name="subnetIpv6CidrInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6CidrInput"></a>

```typescript
public readonly subnetIpv6CidrInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkLoadBalancerNetworkLoadBalancerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---

##### `assignedIpv6`<sup>Required</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedIpv6"></a>

```typescript
public readonly assignedIpv6: string;
```

- *Type:* string

---

##### `assignedPrivateIpv4`<sup>Required</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.assignedPrivateIpv4"></a>

```typescript
public readonly assignedPrivateIpv4: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPreserveSourceDestination`<sup>Required</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPreserveSourceDestination"></a>

```typescript
public readonly isPreserveSourceDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSymmetricHashEnabled`<sup>Required</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.isSymmetricHashEnabled"></a>

```typescript
public readonly isSymmetricHashEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `nlbIpVersion`<sup>Required</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.nlbIpVersion"></a>

```typescript
public readonly nlbIpVersion: string;
```

- *Type:* string

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetIpv6Cidr`<sup>Required</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.subnetIpv6Cidr"></a>

```typescript
public readonly subnetIpv6Cidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancerConfig <a name="NetworkLoadBalancerNetworkLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancerConfig: networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedIpv6">assignedIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedPrivateIpv4">assignedPrivateIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPreserveSourceDestination">isPreserveSourceDestination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isSymmetricHashEnabled">isSymmetricHashEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.nlbIpVersion">nlbIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.reservedIps">reservedIps</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]</code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetIpv6Cidr">subnetIpv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#compartment_id NetworkLoadBalancerNetworkLoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#display_name NetworkLoadBalancerNetworkLoadBalancer#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_id NetworkLoadBalancerNetworkLoadBalancer#subnet_id}.

---

##### `assignedIpv6`<sup>Optional</sup> <a name="assignedIpv6" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedIpv6"></a>

```typescript
public readonly assignedIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_ipv6 NetworkLoadBalancerNetworkLoadBalancer#assigned_ipv6}.

---

##### `assignedPrivateIpv4`<sup>Optional</sup> <a name="assignedPrivateIpv4" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.assignedPrivateIpv4"></a>

```typescript
public readonly assignedPrivateIpv4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#assigned_private_ipv4 NetworkLoadBalancerNetworkLoadBalancer#assigned_private_ipv4}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#defined_tags NetworkLoadBalancerNetworkLoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#freeform_tags NetworkLoadBalancerNetworkLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPreserveSourceDestination`<sup>Optional</sup> <a name="isPreserveSourceDestination" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPreserveSourceDestination"></a>

```typescript
public readonly isPreserveSourceDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_preserve_source_destination NetworkLoadBalancerNetworkLoadBalancer#is_preserve_source_destination}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_private NetworkLoadBalancerNetworkLoadBalancer#is_private}.

---

##### `isSymmetricHashEnabled`<sup>Optional</sup> <a name="isSymmetricHashEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.isSymmetricHashEnabled"></a>

```typescript
public readonly isSymmetricHashEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#is_symmetric_hash_enabled NetworkLoadBalancerNetworkLoadBalancer#is_symmetric_hash_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#network_security_group_ids NetworkLoadBalancerNetworkLoadBalancer#network_security_group_ids}.

---

##### `nlbIpVersion`<sup>Optional</sup> <a name="nlbIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.nlbIpVersion"></a>

```typescript
public readonly nlbIpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#nlb_ip_version NetworkLoadBalancerNetworkLoadBalancer#nlb_ip_version}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.reservedIps"></a>

```typescript
public readonly reservedIps: IResolvable | NetworkLoadBalancerNetworkLoadBalancerReservedIps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#reserved_ips NetworkLoadBalancerNetworkLoadBalancer#reserved_ips}

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#security_attributes NetworkLoadBalancerNetworkLoadBalancer#security_attributes}.

---

##### `subnetIpv6Cidr`<sup>Optional</sup> <a name="subnetIpv6Cidr" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.subnetIpv6Cidr"></a>

```typescript
public readonly subnetIpv6Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#subnet_ipv6cidr NetworkLoadBalancerNetworkLoadBalancer#subnet_ipv6cidr}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerNetworkLoadBalancerTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#timeouts NetworkLoadBalancerNetworkLoadBalancer#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancerIpAddresses <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddresses" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancerIpAddresses: networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses = { ... }
```


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp: networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp = { ... }
```


### NetworkLoadBalancerNetworkLoadBalancerReservedIps <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancerReservedIps: networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#id NetworkLoadBalancerNetworkLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkLoadBalancerNetworkLoadBalancerTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancerTimeouts: networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#create NetworkLoadBalancerNetworkLoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#delete NetworkLoadBalancerNetworkLoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#update NetworkLoadBalancerNetworkLoadBalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#create NetworkLoadBalancerNetworkLoadBalancer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#delete NetworkLoadBalancerNetworkLoadBalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancer#update NetworkLoadBalancerNetworkLoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancerIpAddressesList <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get"></a>

```typescript
public get(index: number): NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic">isPublic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp">reservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses">NetworkLoadBalancerNetworkLoadBalancerIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `reservedIp`<sup>Required</sup> <a name="reservedIp" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.reservedIp"></a>

```typescript
public readonly reservedIp: NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerNetworkLoadBalancerIpAddresses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddresses">NetworkLoadBalancerNetworkLoadBalancerIpAddresses</a>

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get"></a>

```typescript
public get(index: number): NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp">NetworkLoadBalancerNetworkLoadBalancerIpAddressesReservedIp</a>

---


### NetworkLoadBalancerNetworkLoadBalancerReservedIpsList <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get"></a>

```typescript
public get(index: number): NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancerReservedIps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>[]

---


### NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancerReservedIps;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerReservedIps">NetworkLoadBalancerNetworkLoadBalancerReservedIps</a>

---


### NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancer } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancer.NetworkLoadBalancerNetworkLoadBalancerTimeouts">NetworkLoadBalancerNetworkLoadBalancerTimeouts</a>

---



