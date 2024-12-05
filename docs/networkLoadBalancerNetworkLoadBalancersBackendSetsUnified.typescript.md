# `networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule <a name="`networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified(scope: Construct, id: string, config: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends">putBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker">putHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends">resetBackends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen">resetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled">resetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource">resetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackends` <a name="putBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends"></a>

```typescript
public putBackends(value: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]

---

##### `putHealthChecker` <a name="putHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker"></a>

```typescript
public putHealthChecker(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---

##### `resetBackends` <a name="resetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends"></a>

```typescript
public resetBackends(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetIsFailOpen` <a name="resetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen"></a>

```typescript
public resetIsFailOpen(): void
```

##### `resetIsInstantFailoverEnabled` <a name="resetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled"></a>

```typescript
public resetIsInstantFailoverEnabled(): void
```

##### `resetIsPreserveSource` <a name="resetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource"></a>

```typescript
public resetIsPreserveSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput">backendsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput">healthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput">isFailOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput">isInstantFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput">isPreserveSourceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen">isFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource">isPreserveSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends"></a>

```typescript
public readonly backends: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker"></a>

```typescript
public readonly healthChecker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a>

---

##### `backendsInput`<sup>Optional</sup> <a name="backendsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput"></a>

```typescript
public readonly backendsInput: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]

---

##### `healthCheckerInput`<sup>Optional</sup> <a name="healthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput"></a>

```typescript
public readonly healthCheckerInput: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `isFailOpenInput`<sup>Optional</sup> <a name="isFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput"></a>

```typescript
public readonly isFailOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInstantFailoverEnabledInput`<sup>Optional</sup> <a name="isInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput"></a>

```typescript
public readonly isInstantFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreserveSourceInput`<sup>Optional</sup> <a name="isPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput"></a>

```typescript
public readonly isPreserveSourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput"></a>

```typescript
public readonly networkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isFailOpen`<sup>Required</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen"></a>

```typescript
public readonly isFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInstantFailoverEnabled`<sup>Required</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled"></a>

```typescript
public readonly isInstantFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreserveSource`<sup>Required</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource"></a>

```typescript
public readonly isPreserveSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends: networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup">isBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain">isDrain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline">isOffline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}.

---

##### `isBackup`<sup>Optional</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup"></a>

```typescript
public readonly isBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}.

---

##### `isDrain`<sup>Optional</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain"></a>

```typescript
public readonly isDrain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}.

---

##### `isOffline`<sup>Optional</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline"></a>

```typescript
public readonly isOffline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig: networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends">backends</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]</code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen">isFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource">isPreserveSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker"></a>

```typescript
public readonly healthChecker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `backends`<sup>Optional</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends"></a>

```typescript
public readonly backends: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `isFailOpen`<sup>Optional</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen"></a>

```typescript
public readonly isFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `isInstantFailoverEnabled`<sup>Optional</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled"></a>

```typescript
public readonly isInstantFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `isPreserveSource`<sup>Optional</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource"></a>

```typescript
public readonly isPreserveSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker: networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis">intervalInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData">requestData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData">responseData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode">returnCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath">urlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns"></a>

```typescript
public readonly dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}

---

##### `intervalInMillis`<sup>Optional</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis"></a>

```typescript
public readonly intervalInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `requestData`<sup>Optional</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData"></a>

```typescript
public readonly requestData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}.

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}.

---

##### `responseData`<sup>Optional</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData"></a>

```typescript
public readonly responseData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}.

---

##### `returnCode`<sup>Optional</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns: networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass">queryClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes">rcodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}.

---

##### `queryClass`<sup>Optional</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass"></a>

```typescript
public readonly queryClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}.

---

##### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes"></a>

```typescript
public readonly rcodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts: networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get"></a>

```typescript
public get(index: number): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>[]

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup">resetIsBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain">resetIsDrain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline">resetIsOffline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIsBackup` <a name="resetIsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup"></a>

```typescript
public resetIsBackup(): void
```

##### `resetIsDrain` <a name="resetIsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain"></a>

```typescript
public resetIsDrain(): void
```

##### `resetIsOffline` <a name="resetIsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline"></a>

```typescript
public resetIsOffline(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetWeight` <a name="resetWeight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput">isBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput">isDrainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput">isOfflineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup">isBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain">isDrain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline">isOffline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `isBackupInput`<sup>Optional</sup> <a name="isBackupInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput"></a>

```typescript
public readonly isBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDrainInput`<sup>Optional</sup> <a name="isDrainInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput"></a>

```typescript
public readonly isDrainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOfflineInput`<sup>Optional</sup> <a name="isOfflineInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput"></a>

```typescript
public readonly isOfflineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isBackup`<sup>Required</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup"></a>

```typescript
public readonly isBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDrain`<sup>Required</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain"></a>

```typescript
public readonly isDrain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOffline`<sup>Required</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline"></a>

```typescript
public readonly isOffline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass">resetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes">resetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryClass` <a name="resetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass"></a>

```typescript
public resetQueryClass(): void
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType"></a>

```typescript
public resetQueryType(): void
```

##### `resetRcodes` <a name="resetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes"></a>

```typescript
public resetRcodes(): void
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```typescript
public resetTransportProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput">queryClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput">rcodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput">transportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass">queryClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `queryClassInput`<sup>Optional</sup> <a name="queryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```typescript
public readonly queryClassInput: string;
```

- *Type:* string

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `rcodesInput`<sup>Optional</sup> <a name="rcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```typescript
public readonly rcodesInput: string[];
```

- *Type:* string[]

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```typescript
public readonly transportProtocolInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `queryClass`<sup>Required</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass"></a>

```typescript
public readonly queryClass: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes"></a>

```typescript
public readonly rcodes: string[];
```

- *Type:* string[]

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis">resetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData">resetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex">resetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData">resetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode">resetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDns` <a name="putDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns"></a>

```typescript
public putDns(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetIntervalInMillis` <a name="resetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis"></a>

```typescript
public resetIntervalInMillis(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRequestData` <a name="resetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData"></a>

```typescript
public resetRequestData(): void
```

##### `resetResponseBodyRegex` <a name="resetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```typescript
public resetResponseBodyRegex(): void
```

##### `resetResponseData` <a name="resetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData"></a>

```typescript
public resetResponseData(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetReturnCode` <a name="resetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode"></a>

```typescript
public resetReturnCode(): void
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```typescript
public resetTimeoutInMillis(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput">dnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput">intervalInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput">requestDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput">responseBodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput">responseDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput">returnCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis">intervalInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData">requestData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData">responseData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns"></a>

```typescript
public readonly dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `intervalInMillisInput`<sup>Optional</sup> <a name="intervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```typescript
public readonly intervalInMillisInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `requestDataInput`<sup>Optional</sup> <a name="requestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput"></a>

```typescript
public readonly requestDataInput: string;
```

- *Type:* string

---

##### `responseBodyRegexInput`<sup>Optional</sup> <a name="responseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```typescript
public readonly responseBodyRegexInput: string;
```

- *Type:* string

---

##### `responseDataInput`<sup>Optional</sup> <a name="responseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput"></a>

```typescript
public readonly responseDataInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `returnCodeInput`<sup>Optional</sup> <a name="returnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput"></a>

```typescript
public readonly returnCodeInput: number;
```

- *Type:* number

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```typescript
public readonly timeoutInMillisInput: number;
```

- *Type:* number

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `intervalInMillis`<sup>Required</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis"></a>

```typescript
public readonly intervalInMillis: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestData`<sup>Required</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData"></a>

```typescript
public readonly requestData: string;
```

- *Type:* string

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

---

##### `responseData`<sup>Required</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData"></a>

```typescript
public readonly responseData: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerNetworkLoadBalancersBackendSetsUnified } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

---



