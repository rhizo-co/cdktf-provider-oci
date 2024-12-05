# `loadBalancerRuleSet` Submodule <a name="`loadBalancerRuleSet` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerRuleSet <a name="LoadBalancerRuleSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set oci_load_balancer_rule_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSet(scope: Construct, id: string, config: LoadBalancerRuleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig">LoadBalancerRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig">LoadBalancerRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems"></a>

```typescript
public putItems(value: IResolvable | LoadBalancerRuleSetItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts"></a>

```typescript
public putTimeouts(value: LoadBalancerRuleSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList">LoadBalancerRuleSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference">LoadBalancerRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.items"></a>

```typescript
public readonly items: LoadBalancerRuleSetItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList">LoadBalancerRuleSetItemsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerRuleSetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference">LoadBalancerRuleSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | LoadBalancerRuleSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoadBalancerRuleSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerRuleSetConfig <a name="LoadBalancerRuleSetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetConfig: loadBalancerRuleSet.LoadBalancerRuleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.items"></a>

```typescript
public readonly items: IResolvable | LoadBalancerRuleSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#items LoadBalancerRuleSet#items}

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#load_balancer_id LoadBalancerRuleSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#name LoadBalancerRuleSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#id LoadBalancerRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerRuleSetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#timeouts LoadBalancerRuleSet#timeouts}

---

### LoadBalancerRuleSetItems <a name="LoadBalancerRuleSetItems" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetItems: loadBalancerRuleSet.LoadBalancerRuleSetItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#action LoadBalancerRuleSet#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#allowed_methods LoadBalancerRuleSet#allowed_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.areInvalidCharactersAllowed">areInvalidCharactersAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#are_invalid_characters_allowed LoadBalancerRuleSet#are_invalid_characters_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]</code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.defaultMaxConnections">defaultMaxConnections</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#default_max_connections LoadBalancerRuleSet#default_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#description LoadBalancerRuleSet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#header LoadBalancerRuleSet#header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.httpLargeHeaderSizeInKb">httpLargeHeaderSizeInKb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#http_large_header_size_in_kb LoadBalancerRuleSet#http_large_header_size_in_kb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.ipMaxConnections">ipMaxConnections</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]</code> | ip_max_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#prefix LoadBalancerRuleSet#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.redirectUri">redirectUri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | redirect_uri block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#response_code LoadBalancerRuleSet#response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.statusCode">statusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#status_code LoadBalancerRuleSet#status_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#suffix LoadBalancerRuleSet#suffix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#value LoadBalancerRuleSet#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#action LoadBalancerRuleSet#action}.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#allowed_methods LoadBalancerRuleSet#allowed_methods}.

---

##### `areInvalidCharactersAllowed`<sup>Optional</sup> <a name="areInvalidCharactersAllowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.areInvalidCharactersAllowed"></a>

```typescript
public readonly areInvalidCharactersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#are_invalid_characters_allowed LoadBalancerRuleSet#are_invalid_characters_allowed}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | LoadBalancerRuleSetItemsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#conditions LoadBalancerRuleSet#conditions}

---

##### `defaultMaxConnections`<sup>Optional</sup> <a name="defaultMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.defaultMaxConnections"></a>

```typescript
public readonly defaultMaxConnections: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#default_max_connections LoadBalancerRuleSet#default_max_connections}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#description LoadBalancerRuleSet#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#header LoadBalancerRuleSet#header}.

---

##### `httpLargeHeaderSizeInKb`<sup>Optional</sup> <a name="httpLargeHeaderSizeInKb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.httpLargeHeaderSizeInKb"></a>

```typescript
public readonly httpLargeHeaderSizeInKb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#http_large_header_size_in_kb LoadBalancerRuleSet#http_large_header_size_in_kb}.

---

##### `ipMaxConnections`<sup>Optional</sup> <a name="ipMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.ipMaxConnections"></a>

```typescript
public readonly ipMaxConnections: IResolvable | LoadBalancerRuleSetItemsIpMaxConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]

ip_max_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_max_connections LoadBalancerRuleSet#ip_max_connections}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#prefix LoadBalancerRuleSet#prefix}.

---

##### `redirectUri`<sup>Optional</sup> <a name="redirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.redirectUri"></a>

```typescript
public readonly redirectUri: LoadBalancerRuleSetItemsRedirectUri;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

redirect_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#redirect_uri LoadBalancerRuleSet#redirect_uri}

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#response_code LoadBalancerRuleSet#response_code}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#status_code LoadBalancerRuleSet#status_code}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#suffix LoadBalancerRuleSet#suffix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#value LoadBalancerRuleSet#value}.

---

### LoadBalancerRuleSetItemsConditions <a name="LoadBalancerRuleSetItemsConditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetItemsConditions: loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeName">attributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_name LoadBalancerRuleSet#attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeValue">attributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_value LoadBalancerRuleSet#attribute_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#operator LoadBalancerRuleSet#operator}. |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_name LoadBalancerRuleSet#attribute_name}.

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#attribute_value LoadBalancerRuleSet#attribute_value}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#operator LoadBalancerRuleSet#operator}.

---

### LoadBalancerRuleSetItemsIpMaxConnections <a name="LoadBalancerRuleSetItemsIpMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetItemsIpMaxConnections: loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_addresses LoadBalancerRuleSet#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.maxConnections">maxConnections</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#max_connections LoadBalancerRuleSet#max_connections}. |

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#ip_addresses LoadBalancerRuleSet#ip_addresses}.

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#max_connections LoadBalancerRuleSet#max_connections}.

---

### LoadBalancerRuleSetItemsRedirectUri <a name="LoadBalancerRuleSetItemsRedirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetItemsRedirectUri: loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#host LoadBalancerRuleSet#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#path LoadBalancerRuleSet#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#port LoadBalancerRuleSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#protocol LoadBalancerRuleSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#query LoadBalancerRuleSet#query}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#host LoadBalancerRuleSet#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#path LoadBalancerRuleSet#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#port LoadBalancerRuleSet#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#protocol LoadBalancerRuleSet#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#query LoadBalancerRuleSet#query}.

---

### LoadBalancerRuleSetTimeouts <a name="LoadBalancerRuleSetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

const loadBalancerRuleSetTimeouts: loadBalancerRuleSet.LoadBalancerRuleSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#create LoadBalancerRuleSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#delete LoadBalancerRuleSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#update LoadBalancerRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#create LoadBalancerRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#delete LoadBalancerRuleSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_rule_set#update LoadBalancerRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerRuleSetItemsConditionsList <a name="LoadBalancerRuleSetItemsConditionsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get"></a>

```typescript
public get(index: number): LoadBalancerRuleSetItemsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItemsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]

---


### LoadBalancerRuleSetItemsConditionsOutputReference <a name="LoadBalancerRuleSetItemsConditionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItemsConditions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>

---


### LoadBalancerRuleSetItemsIpMaxConnectionsList <a name="LoadBalancerRuleSetItemsIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get"></a>

```typescript
public get(index: number): LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItemsIpMaxConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]

---


### LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference <a name="LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddresses` <a name="resetIpAddresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItemsIpMaxConnections;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>

---


### LoadBalancerRuleSetItemsList <a name="LoadBalancerRuleSetItemsList" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get"></a>

```typescript
public get(index: number): LoadBalancerRuleSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>[]

---


### LoadBalancerRuleSetItemsOutputReference <a name="LoadBalancerRuleSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections">putIpMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri">putRedirectUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAreInvalidCharactersAllowed">resetAreInvalidCharactersAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDefaultMaxConnections">resetDefaultMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHttpLargeHeaderSizeInKb">resetHttpLargeHeaderSizeInKb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetIpMaxConnections">resetIpMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetRedirectUri">resetRedirectUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | LoadBalancerRuleSetItemsConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]

---

##### `putIpMaxConnections` <a name="putIpMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections"></a>

```typescript
public putIpMaxConnections(value: IResolvable | LoadBalancerRuleSetItemsIpMaxConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putIpMaxConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]

---

##### `putRedirectUri` <a name="putRedirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri"></a>

```typescript
public putRedirectUri(value: LoadBalancerRuleSetItemsRedirectUri): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.putRedirectUri.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

---

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetAreInvalidCharactersAllowed` <a name="resetAreInvalidCharactersAllowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetAreInvalidCharactersAllowed"></a>

```typescript
public resetAreInvalidCharactersAllowed(): void
```

##### `resetConditions` <a name="resetConditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDefaultMaxConnections` <a name="resetDefaultMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDefaultMaxConnections"></a>

```typescript
public resetDefaultMaxConnections(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeader` <a name="resetHeader" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHttpLargeHeaderSizeInKb` <a name="resetHttpLargeHeaderSizeInKb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetHttpLargeHeaderSizeInKb"></a>

```typescript
public resetHttpLargeHeaderSizeInKb(): void
```

##### `resetIpMaxConnections` <a name="resetIpMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetIpMaxConnections"></a>

```typescript
public resetIpMaxConnections(): void
```

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRedirectUri` <a name="resetRedirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetRedirectUri"></a>

```typescript
public resetRedirectUri(): void
```

##### `resetResponseCode` <a name="resetResponseCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetSuffix` <a name="resetSuffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList">LoadBalancerRuleSetItemsConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections">ipMaxConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList">LoadBalancerRuleSetItemsIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUri">redirectUri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference">LoadBalancerRuleSetItemsRedirectUriOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowedInput">areInvalidCharactersAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnectionsInput">defaultMaxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKbInput">httpLargeHeaderSizeInKbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnectionsInput">ipMaxConnectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed">areInvalidCharactersAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections">defaultMaxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb">httpLargeHeaderSizeInKb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditions"></a>

```typescript
public readonly conditions: LoadBalancerRuleSetItemsConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditionsList">LoadBalancerRuleSetItemsConditionsList</a>

---

##### `ipMaxConnections`<sup>Required</sup> <a name="ipMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections"></a>

```typescript
public readonly ipMaxConnections: LoadBalancerRuleSetItemsIpMaxConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnectionsList">LoadBalancerRuleSetItemsIpMaxConnectionsList</a>

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: LoadBalancerRuleSetItemsRedirectUriOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference">LoadBalancerRuleSetItemsRedirectUriOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `areInvalidCharactersAllowedInput`<sup>Optional</sup> <a name="areInvalidCharactersAllowedInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowedInput"></a>

```typescript
public readonly areInvalidCharactersAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | LoadBalancerRuleSetItemsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsConditions">LoadBalancerRuleSetItemsConditions</a>[]

---

##### `defaultMaxConnectionsInput`<sup>Optional</sup> <a name="defaultMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnectionsInput"></a>

```typescript
public readonly defaultMaxConnectionsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `httpLargeHeaderSizeInKbInput`<sup>Optional</sup> <a name="httpLargeHeaderSizeInKbInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKbInput"></a>

```typescript
public readonly httpLargeHeaderSizeInKbInput: number;
```

- *Type:* number

---

##### `ipMaxConnectionsInput`<sup>Optional</sup> <a name="ipMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.ipMaxConnectionsInput"></a>

```typescript
public readonly ipMaxConnectionsInput: IResolvable | LoadBalancerRuleSetItemsIpMaxConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsIpMaxConnections">LoadBalancerRuleSetItemsIpMaxConnections</a>[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: LoadBalancerRuleSetItemsRedirectUri;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `areInvalidCharactersAllowed`<sup>Required</sup> <a name="areInvalidCharactersAllowed" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed"></a>

```typescript
public readonly areInvalidCharactersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultMaxConnections`<sup>Required</sup> <a name="defaultMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections"></a>

```typescript
public readonly defaultMaxConnections: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `httpLargeHeaderSizeInKb`<sup>Required</sup> <a name="httpLargeHeaderSizeInKb" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb"></a>

```typescript
public readonly httpLargeHeaderSizeInKb: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItems">LoadBalancerRuleSetItems</a>

---


### LoadBalancerRuleSetItemsRedirectUriOutputReference <a name="LoadBalancerRuleSetItemsRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerRuleSetItemsRedirectUri;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetItemsRedirectUri">LoadBalancerRuleSetItemsRedirectUri</a>

---


### LoadBalancerRuleSetTimeoutsOutputReference <a name="LoadBalancerRuleSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { loadBalancerRuleSet } from 'rhizo-co-terraform-provider-oci'

new loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRuleSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerRuleSet.LoadBalancerRuleSetTimeouts">LoadBalancerRuleSetTimeouts</a>

---



