# `coreDrgRouteDistributionStatement` Submodule <a name="`coreDrgRouteDistributionStatement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteDistributionStatement <a name="CoreDrgRouteDistributionStatement" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement oci_core_drg_route_distribution_statement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

new coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement(scope: Construct, id: string, config: CoreDrgRouteDistributionStatementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig">CoreDrgRouteDistributionStatementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig">CoreDrgRouteDistributionStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria">putMatchCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatchCriteria` <a name="putMatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria"></a>

```typescript
public putMatchCriteria(value: CoreDrgRouteDistributionStatementMatchCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putMatchCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreDrgRouteDistributionStatementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDrgRouteDistributionStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDrgRouteDistributionStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteDistributionStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria">matchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput">drgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId">drgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: CoreDrgRouteDistributionStatementMatchCriteriaOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference">CoreDrgRouteDistributionStatementMatchCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDrgRouteDistributionStatementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference">CoreDrgRouteDistributionStatementTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `drgRouteDistributionIdInput`<sup>Optional</sup> <a name="drgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionIdInput"></a>

```typescript
public readonly drgRouteDistributionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.matchCriteriaInput"></a>

```typescript
public readonly matchCriteriaInput: CoreDrgRouteDistributionStatementMatchCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreDrgRouteDistributionStatementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `drgRouteDistributionId`<sup>Required</sup> <a name="drgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.drgRouteDistributionId"></a>

```typescript
public readonly drgRouteDistributionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteDistributionStatementConfig <a name="CoreDrgRouteDistributionStatementConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

const coreDrgRouteDistributionStatementConfig: coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId">drgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria">matchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | match_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}.

---

##### `drgRouteDistributionId`<sup>Required</sup> <a name="drgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.drgRouteDistributionId"></a>

```typescript
public readonly drgRouteDistributionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}.

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: CoreDrgRouteDistributionStatementMatchCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

match_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_criteria CoreDrgRouteDistributionStatement#match_criteria}

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDrgRouteDistributionStatementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#timeouts CoreDrgRouteDistributionStatement#timeouts}

---

### CoreDrgRouteDistributionStatementMatchCriteria <a name="CoreDrgRouteDistributionStatementMatchCriteria" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

const coreDrgRouteDistributionStatementMatchCriteria: coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType">attachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId">drgAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType">matchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}. |

---

##### `attachmentType`<sup>Optional</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}.

---

##### `drgAttachmentId`<sup>Optional</sup> <a name="drgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.drgAttachmentId"></a>

```typescript
public readonly drgAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}.

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}.

---

### CoreDrgRouteDistributionStatementTimeouts <a name="CoreDrgRouteDistributionStatementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

const coreDrgRouteDistributionStatementTimeouts: coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteDistributionStatementMatchCriteriaOutputReference <a name="CoreDrgRouteDistributionStatementMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

new coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType">resetAttachmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId">resetDrgAttachmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachmentType` <a name="resetAttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetAttachmentType"></a>

```typescript
public resetAttachmentType(): void
```

##### `resetDrgAttachmentId` <a name="resetDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetDrgAttachmentId"></a>

```typescript
public resetDrgAttachmentId(): void
```

##### `resetMatchType` <a name="resetMatchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.resetMatchType"></a>

```typescript
public resetMatchType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput">attachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput">drgAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId">drgAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentTypeInput`<sup>Optional</sup> <a name="attachmentTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentTypeInput"></a>

```typescript
public readonly attachmentTypeInput: string;
```

- *Type:* string

---

##### `drgAttachmentIdInput`<sup>Optional</sup> <a name="drgAttachmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentIdInput"></a>

```typescript
public readonly drgAttachmentIdInput: string;
```

- *Type:* string

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `drgAttachmentId`<sup>Required</sup> <a name="drgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```typescript
public readonly drgAttachmentId: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDrgRouteDistributionStatementMatchCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementMatchCriteria">CoreDrgRouteDistributionStatementMatchCriteria</a>

---


### CoreDrgRouteDistributionStatementTimeoutsOutputReference <a name="CoreDrgRouteDistributionStatementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreDrgRouteDistributionStatement } from 'rhizo-co-terraform-provider-oci'

new coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDrgRouteDistributionStatementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteDistributionStatement.CoreDrgRouteDistributionStatementTimeouts">CoreDrgRouteDistributionStatementTimeouts</a>

---



