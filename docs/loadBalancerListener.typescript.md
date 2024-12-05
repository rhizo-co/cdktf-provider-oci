# `loadBalancerListener` Submodule <a name="`loadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListener <a name="LoadBalancerListener" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener oci_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new loadBalancerListener.LoadBalancerListener(scope: Construct, id: string, config: LoadBalancerListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration">resetConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames">resetHostnameNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName">resetPathRouteSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName">resetRoutingPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames">resetRuleSetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration"></a>

```typescript
public putConnectionConfiguration(value: LoadBalancerListenerConnectionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration"></a>

```typescript
public putSslConfiguration(value: LoadBalancerListenerSslConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts"></a>

```typescript
public putTimeouts(value: LoadBalancerListenerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `resetConnectionConfiguration` <a name="resetConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration"></a>

```typescript
public resetConnectionConfiguration(): void
```

##### `resetHostnameNames` <a name="resetHostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames"></a>

```typescript
public resetHostnameNames(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPathRouteSetName` <a name="resetPathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName"></a>

```typescript
public resetPathRouteSetName(): void
```

##### `resetRoutingPolicyName` <a name="resetRoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName"></a>

```typescript
public resetRoutingPolicyName(): void
```

##### `resetRuleSetNames` <a name="resetRuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames"></a>

```typescript
public resetRuleSetNames(): void
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration"></a>

```typescript
public resetSslConfiguration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

loadBalancerListener.LoadBalancerListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

loadBalancerListener.LoadBalancerListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

loadBalancerListener.LoadBalancerListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

loadBalancerListener.LoadBalancerListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput">defaultBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput">hostnameNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput">pathRouteSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput">routingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput">ruleSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames">hostnameNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName">pathRouteSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName">routingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames">ruleSetNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: LoadBalancerListenerConnectionConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: LoadBalancerListenerSslConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerListenerTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a>

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput"></a>

```typescript
public readonly connectionConfigurationInput: LoadBalancerListenerConnectionConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `defaultBackendSetNameInput`<sup>Optional</sup> <a name="defaultBackendSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput"></a>

```typescript
public readonly defaultBackendSetNameInput: string;
```

- *Type:* string

---

##### `hostnameNamesInput`<sup>Optional</sup> <a name="hostnameNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput"></a>

```typescript
public readonly hostnameNamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathRouteSetNameInput`<sup>Optional</sup> <a name="pathRouteSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput"></a>

```typescript
public readonly pathRouteSetNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `routingPolicyNameInput`<sup>Optional</sup> <a name="routingPolicyNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput"></a>

```typescript
public readonly routingPolicyNameInput: string;
```

- *Type:* string

---

##### `ruleSetNamesInput`<sup>Optional</sup> <a name="ruleSetNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput"></a>

```typescript
public readonly ruleSetNamesInput: string[];
```

- *Type:* string[]

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput"></a>

```typescript
public readonly sslConfigurationInput: LoadBalancerListenerSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoadBalancerListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName"></a>

```typescript
public readonly defaultBackendSetName: string;
```

- *Type:* string

---

##### `hostnameNames`<sup>Required</sup> <a name="hostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames"></a>

```typescript
public readonly hostnameNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathRouteSetName`<sup>Required</sup> <a name="pathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName"></a>

```typescript
public readonly pathRouteSetName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName"></a>

```typescript
public readonly routingPolicyName: string;
```

- *Type:* string

---

##### `ruleSetNames`<sup>Required</sup> <a name="ruleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames"></a>

```typescript
public readonly ruleSetNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerConfig <a name="LoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const loadBalancerListenerConfig: loadBalancerListener.LoadBalancerListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName">defaultBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames">hostnameNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName">pathRouteSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName">routingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames">ruleSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultBackendSetName`<sup>Required</sup> <a name="defaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```typescript
public readonly defaultBackendSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `connectionConfiguration`<sup>Optional</sup> <a name="connectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: LoadBalancerListenerConnectionConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `hostnameNames`<sup>Optional</sup> <a name="hostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames"></a>

```typescript
public readonly hostnameNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathRouteSetName`<sup>Optional</sup> <a name="pathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName"></a>

```typescript
public readonly pathRouteSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `routingPolicyName`<sup>Optional</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName"></a>

```typescript
public readonly routingPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `ruleSetNames`<sup>Optional</sup> <a name="ruleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames"></a>

```typescript
public readonly ruleSetNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: LoadBalancerListenerSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerListenerTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

### LoadBalancerListenerConnectionConfiguration <a name="LoadBalancerListenerConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const loadBalancerListenerConnectionConfiguration: loadBalancerListener.LoadBalancerListenerConnectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions">backendTcpProxyProtocolOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion">backendTcpProxyProtocolVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}. |

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds"></a>

```typescript
public readonly idleTimeoutInSeconds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

##### `backendTcpProxyProtocolOptions`<sup>Optional</sup> <a name="backendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions"></a>

```typescript
public readonly backendTcpProxyProtocolOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

##### `backendTcpProxyProtocolVersion`<sup>Optional</sup> <a name="backendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion"></a>

```typescript
public readonly backendTcpProxyProtocolVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

### LoadBalancerListenerSslConfiguration <a name="LoadBalancerListenerSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const loadBalancerListenerSslConfiguration: loadBalancerListener.LoadBalancerListenerSslConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName">cipherSuiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption">hasSessionResumption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth">verifyDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

##### `cipherSuiteName`<sup>Optional</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName"></a>

```typescript
public readonly cipherSuiteName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

##### `hasSessionResumption`<sup>Optional</sup> <a name="hasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption"></a>

```typescript
public readonly hasSessionResumption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

##### `trustedCertificateAuthorityIds`<sup>Optional</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```typescript
public readonly trustedCertificateAuthorityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

##### `verifyDepth`<sup>Optional</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth"></a>

```typescript
public readonly verifyDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

##### `verifyPeerCertificate`<sup>Optional</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate"></a>

```typescript
public readonly verifyPeerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

### LoadBalancerListenerTimeouts <a name="LoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

const loadBalancerListenerTimeouts: loadBalancerListener.LoadBalancerListenerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerListenerConnectionConfigurationOutputReference <a name="LoadBalancerListenerConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions">resetBackendTcpProxyProtocolOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion">resetBackendTcpProxyProtocolVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendTcpProxyProtocolOptions` <a name="resetBackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions"></a>

```typescript
public resetBackendTcpProxyProtocolOptions(): void
```

##### `resetBackendTcpProxyProtocolVersion` <a name="resetBackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion"></a>

```typescript
public resetBackendTcpProxyProtocolVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput">backendTcpProxyProtocolOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput">backendTcpProxyProtocolVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput">idleTimeoutInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions">backendTcpProxyProtocolOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion">backendTcpProxyProtocolVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendTcpProxyProtocolOptionsInput`<sup>Optional</sup> <a name="backendTcpProxyProtocolOptionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput"></a>

```typescript
public readonly backendTcpProxyProtocolOptionsInput: string[];
```

- *Type:* string[]

---

##### `backendTcpProxyProtocolVersionInput`<sup>Optional</sup> <a name="backendTcpProxyProtocolVersionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput"></a>

```typescript
public readonly backendTcpProxyProtocolVersionInput: number;
```

- *Type:* number

---

##### `idleTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput"></a>

```typescript
public readonly idleTimeoutInSecondsInput: string;
```

- *Type:* string

---

##### `backendTcpProxyProtocolOptions`<sup>Required</sup> <a name="backendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions"></a>

```typescript
public readonly backendTcpProxyProtocolOptions: string[];
```

- *Type:* string[]

---

##### `backendTcpProxyProtocolVersion`<sup>Required</sup> <a name="backendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion"></a>

```typescript
public readonly backendTcpProxyProtocolVersion: number;
```

- *Type:* number

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds"></a>

```typescript
public readonly idleTimeoutInSeconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerListenerConnectionConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---


### LoadBalancerListenerSslConfigurationOutputReference <a name="LoadBalancerListenerSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName">resetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption">resetHasSessionResumption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference">resetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">resetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth">resetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate">resetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds"></a>

```typescript
public resetCertificateIds(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetCipherSuiteName` <a name="resetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName"></a>

```typescript
public resetCipherSuiteName(): void
```

##### `resetHasSessionResumption` <a name="resetHasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption"></a>

```typescript
public resetHasSessionResumption(): void
```

##### `resetProtocols` <a name="resetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference"></a>

```typescript
public resetServerOrderPreference(): void
```

##### `resetTrustedCertificateAuthorityIds` <a name="resetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```typescript
public resetTrustedCertificateAuthorityIds(): void
```

##### `resetVerifyDepth` <a name="resetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth"></a>

```typescript
public resetVerifyDepth(): void
```

##### `resetVerifyPeerCertificate` <a name="resetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```typescript
public resetVerifyPeerCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput">cipherSuiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput">hasSessionResumptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trustedCertificateAuthorityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput">verifyDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput">verifyPeerCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName">cipherSuiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption">hasSessionResumption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth">verifyDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput"></a>

```typescript
public readonly certificateIdsInput: string[];
```

- *Type:* string[]

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `cipherSuiteNameInput`<sup>Optional</sup> <a name="cipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```typescript
public readonly cipherSuiteNameInput: string;
```

- *Type:* string

---

##### `hasSessionResumptionInput`<sup>Optional</sup> <a name="hasSessionResumptionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput"></a>

```typescript
public readonly hasSessionResumptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```typescript
public readonly serverOrderPreferenceInput: string;
```

- *Type:* string

---

##### `trustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="trustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```typescript
public readonly trustedCertificateAuthorityIdsInput: string[];
```

- *Type:* string[]

---

##### `verifyDepthInput`<sup>Optional</sup> <a name="verifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput"></a>

```typescript
public readonly verifyDepthInput: number;
```

- *Type:* number

---

##### `verifyPeerCertificateInput`<sup>Optional</sup> <a name="verifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```typescript
public readonly verifyPeerCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `cipherSuiteName`<sup>Required</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName"></a>

```typescript
public readonly cipherSuiteName: string;
```

- *Type:* string

---

##### `hasSessionResumption`<sup>Required</sup> <a name="hasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption"></a>

```typescript
public readonly hasSessionResumption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

---

##### `trustedCertificateAuthorityIds`<sup>Required</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```typescript
public readonly trustedCertificateAuthorityIds: string[];
```

- *Type:* string[]

---

##### `verifyDepth`<sup>Required</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth"></a>

```typescript
public readonly verifyDepth: number;
```

- *Type:* number

---

##### `verifyPeerCertificate`<sup>Required</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```typescript
public readonly verifyPeerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerListenerSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---


### LoadBalancerListenerTimeoutsOutputReference <a name="LoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```typescript
import { loadBalancerListener } from 'rhizo-co-terraform-provider-oci'

new loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerListenerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---



