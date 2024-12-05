# `loadBalancerSslCipherSuite` Submodule <a name="`loadBalancerSslCipherSuite` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerSslCipherSuite <a name="LoadBalancerSslCipherSuite" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite oci_load_balancer_ssl_cipher_suite}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

new loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite(scope: Construct, id: string, config: LoadBalancerSslCipherSuiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig">LoadBalancerSslCipherSuiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig">LoadBalancerSslCipherSuiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.putTimeouts"></a>

```typescript
public putTimeouts(value: LoadBalancerSslCipherSuiteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerSslCipherSuite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isConstruct"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformElement"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformResource"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerSslCipherSuite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerSslCipherSuite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerSslCipherSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerSslCipherSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference">LoadBalancerSslCipherSuiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerSslCipherSuiteTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference">LoadBalancerSslCipherSuiteTimeoutsOutputReference</a>

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoadBalancerSslCipherSuiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a>

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerSslCipherSuiteConfig <a name="LoadBalancerSslCipherSuiteConfig" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.Initializer"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

const loadBalancerSslCipherSuiteConfig: loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.ciphers">ciphers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#ciphers LoadBalancerSslCipherSuite#ciphers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#load_balancer_id LoadBalancerSslCipherSuite#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#name LoadBalancerSslCipherSuite#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#id LoadBalancerSslCipherSuite#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#ciphers LoadBalancerSslCipherSuite#ciphers}.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#load_balancer_id LoadBalancerSslCipherSuite#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#name LoadBalancerSslCipherSuite#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#id LoadBalancerSslCipherSuite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerSslCipherSuiteTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#timeouts LoadBalancerSslCipherSuite#timeouts}

---

### LoadBalancerSslCipherSuiteTimeouts <a name="LoadBalancerSslCipherSuiteTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.Initializer"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

const loadBalancerSslCipherSuiteTimeouts: loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#create LoadBalancerSslCipherSuite#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#delete LoadBalancerSslCipherSuite#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#update LoadBalancerSslCipherSuite#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#create LoadBalancerSslCipherSuite#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#delete LoadBalancerSslCipherSuite#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_ssl_cipher_suite#update LoadBalancerSslCipherSuite#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerSslCipherSuiteTimeoutsOutputReference <a name="LoadBalancerSslCipherSuiteTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.Initializer"></a>

```typescript
import { loadBalancerSslCipherSuite } from 'rhizo-co-terraform-provider-oci'

new loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerSslCipherSuiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerSslCipherSuite.LoadBalancerSslCipherSuiteTimeouts">LoadBalancerSslCipherSuiteTimeouts</a>

---



