# `networkLoadBalancerBackendSet` Submodule <a name="`networkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerBackendSet <a name="NetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet(scope: Construct, id: string, config: NetworkLoadBalancerBackendSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker">putHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen">resetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled">resetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource">resetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthChecker` <a name="putHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker"></a>

```typescript
public putHealthChecker(value: NetworkLoadBalancerBackendSetHealthChecker): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkLoadBalancerBackendSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetIsFailOpen` <a name="resetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen"></a>

```typescript
public resetIsFailOpen(): void
```

##### `resetIsInstantFailoverEnabled` <a name="resetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled"></a>

```typescript
public resetIsInstantFailoverEnabled(): void
```

##### `resetIsPreserveSource` <a name="resetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource"></a>

```typescript
public resetIsPreserveSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkLoadBalancerBackendSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput">healthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput">isFailOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput">isInstantFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput">isPreserveSourceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen">isFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource">isPreserveSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends"></a>

```typescript
public readonly backends: NetworkLoadBalancerBackendSetBackendsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker"></a>

```typescript
public readonly healthChecker: NetworkLoadBalancerBackendSetHealthCheckerOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerBackendSetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a>

---

##### `healthCheckerInput`<sup>Optional</sup> <a name="healthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput"></a>

```typescript
public readonly healthCheckerInput: NetworkLoadBalancerBackendSetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `isFailOpenInput`<sup>Optional</sup> <a name="isFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput"></a>

```typescript
public readonly isFailOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInstantFailoverEnabledInput`<sup>Optional</sup> <a name="isInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput"></a>

```typescript
public readonly isInstantFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreserveSourceInput`<sup>Optional</sup> <a name="isPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput"></a>

```typescript
public readonly isPreserveSourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```typescript
public readonly networkLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkLoadBalancerBackendSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isFailOpen`<sup>Required</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```typescript
public readonly isFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInstantFailoverEnabled`<sup>Required</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```typescript
public readonly isInstantFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreserveSource`<sup>Required</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```typescript
public readonly isPreserveSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerBackendSetBackends <a name="NetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerBackendSetBackends: networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends = { ... }
```


### NetworkLoadBalancerBackendSetConfig <a name="NetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerBackendSetConfig: networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen">isFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource">isPreserveSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker"></a>

```typescript
public readonly healthChecker: NetworkLoadBalancerBackendSetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#health_checker NetworkLoadBalancerBackendSet#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}.

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```typescript
public readonly networkLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}.

---

##### `isFailOpen`<sup>Optional</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen"></a>

```typescript
public readonly isFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}.

---

##### `isInstantFailoverEnabled`<sup>Optional</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled"></a>

```typescript
public readonly isInstantFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}.

---

##### `isPreserveSource`<sup>Optional</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource"></a>

```typescript
public readonly isPreserveSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkLoadBalancerBackendSetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeouts NetworkLoadBalancerBackendSet#timeouts}

---

### NetworkLoadBalancerBackendSetHealthChecker <a name="NetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerBackendSetHealthChecker: networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis">intervalInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData">requestData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData">responseData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode">returnCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath">urlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns"></a>

```typescript
public readonly dns: NetworkLoadBalancerBackendSetHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#dns NetworkLoadBalancerBackendSet#dns}

---

##### `intervalInMillis`<sup>Optional</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis"></a>

```typescript
public readonly intervalInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}.

---

##### `requestData`<sup>Optional</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData"></a>

```typescript
public readonly requestData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}.

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}.

---

##### `responseData`<sup>Optional</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData"></a>

```typescript
public readonly responseData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}.

---

##### `returnCode`<sup>Optional</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}.

---

### NetworkLoadBalancerBackendSetHealthCheckerDns <a name="NetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerBackendSetHealthCheckerDns: networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass">queryClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes">rcodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}.

---

##### `queryClass`<sup>Optional</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass"></a>

```typescript
public readonly queryClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}.

---

##### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes"></a>

```typescript
public readonly rcodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}.

---

### NetworkLoadBalancerBackendSetTimeouts <a name="NetworkLoadBalancerBackendSetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

const networkLoadBalancerBackendSetTimeouts: networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerBackendSetBackendsList <a name="NetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get"></a>

```typescript
public get(index: number): NetworkLoadBalancerBackendSetBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkLoadBalancerBackendSetBackendsOutputReference <a name="NetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">isBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">isDrain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">isOffline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isBackup`<sup>Required</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```typescript
public readonly isBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDrain`<sup>Required</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```typescript
public readonly isDrain: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOffline`<sup>Required</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```typescript
public readonly isOffline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerBackendSetBackends;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass">resetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes">resetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryClass` <a name="resetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass"></a>

```typescript
public resetQueryClass(): void
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType"></a>

```typescript
public resetQueryType(): void
```

##### `resetRcodes` <a name="resetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes"></a>

```typescript
public resetRcodes(): void
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```typescript
public resetTransportProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput">queryClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput">rcodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput">transportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">queryClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `queryClassInput`<sup>Optional</sup> <a name="queryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```typescript
public readonly queryClassInput: string;
```

- *Type:* string

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `rcodesInput`<sup>Optional</sup> <a name="rcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```typescript
public readonly rcodesInput: string[];
```

- *Type:* string[]

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```typescript
public readonly transportProtocolInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `queryClass`<sup>Required</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```typescript
public readonly queryClass: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```typescript
public readonly rcodes: string[];
```

- *Type:* string[]

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerBackendSetHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis">resetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData">resetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex">resetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData">resetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode">resetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDns` <a name="putDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns"></a>

```typescript
public putDns(value: NetworkLoadBalancerBackendSetHealthCheckerDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `resetDns` <a name="resetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetIntervalInMillis` <a name="resetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis"></a>

```typescript
public resetIntervalInMillis(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRequestData` <a name="resetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData"></a>

```typescript
public resetRequestData(): void
```

##### `resetResponseBodyRegex` <a name="resetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```typescript
public resetResponseBodyRegex(): void
```

##### `resetResponseData` <a name="resetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData"></a>

```typescript
public resetResponseData(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetReturnCode` <a name="resetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode"></a>

```typescript
public resetReturnCode(): void
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```typescript
public resetTimeoutInMillis(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput">dnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput">intervalInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput">requestDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput">responseBodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput">responseDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput">returnCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">intervalInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">requestData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">responseData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```typescript
public readonly dns: NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: NetworkLoadBalancerBackendSetHealthCheckerDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `intervalInMillisInput`<sup>Optional</sup> <a name="intervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```typescript
public readonly intervalInMillisInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `requestDataInput`<sup>Optional</sup> <a name="requestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput"></a>

```typescript
public readonly requestDataInput: string;
```

- *Type:* string

---

##### `responseBodyRegexInput`<sup>Optional</sup> <a name="responseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```typescript
public readonly responseBodyRegexInput: string;
```

- *Type:* string

---

##### `responseDataInput`<sup>Optional</sup> <a name="responseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput"></a>

```typescript
public readonly responseDataInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `returnCodeInput`<sup>Optional</sup> <a name="returnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput"></a>

```typescript
public readonly returnCodeInput: number;
```

- *Type:* number

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```typescript
public readonly timeoutInMillisInput: number;
```

- *Type:* number

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `intervalInMillis`<sup>Required</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```typescript
public readonly intervalInMillis: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestData`<sup>Required</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```typescript
public readonly requestData: string;
```

- *Type:* string

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

---

##### `responseData`<sup>Required</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```typescript
public readonly responseData: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLoadBalancerBackendSetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---


### NetworkLoadBalancerBackendSetTimeoutsOutputReference <a name="NetworkLoadBalancerBackendSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkLoadBalancerBackendSet } from 'rhizo-co-terraform-provider-oci'

new networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLoadBalancerBackendSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

---



