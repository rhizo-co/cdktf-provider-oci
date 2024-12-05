# `meteringComputationQuery` Submodule <a name="`meteringComputationQuery` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationQuery <a name="MeteringComputationQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query oci_metering_computation_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQuery(scope: Construct, id: string, config: MeteringComputationQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig">MeteringComputationQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig">MeteringComputationQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition">putQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQueryDefinition` <a name="putQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition"></a>

```typescript
public putQueryDefinition(value: MeteringComputationQueryQueryDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts"></a>

```typescript
public putTimeouts(value: MeteringComputationQueryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

meteringComputationQuery.MeteringComputationQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

meteringComputationQuery.MeteringComputationQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

meteringComputationQuery.MeteringComputationQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

meteringComputationQuery.MeteringComputationQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput">queryDefinitionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition"></a>

```typescript
public readonly queryDefinition: MeteringComputationQueryQueryDefinitionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationQueryTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryDefinitionInput`<sup>Optional</sup> <a name="queryDefinitionInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput"></a>

```typescript
public readonly queryDefinitionInput: MeteringComputationQueryQueryDefinition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MeteringComputationQueryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationQueryConfig <a name="MeteringComputationQueryConfig" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryConfig: meteringComputationQuery.MeteringComputationQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}.

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition"></a>

```typescript
public readonly queryDefinition: MeteringComputationQueryQueryDefinition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_definition MeteringComputationQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationQueryTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#timeouts MeteringComputationQuery#timeouts}

---

### MeteringComputationQueryQueryDefinition <a name="MeteringComputationQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryQueryDefinition: meteringComputationQuery.MeteringComputationQueryQueryDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi">costAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | cost_analysis_ui block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery">reportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | report_query block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}. |

---

##### `costAnalysisUi`<sup>Required</sup> <a name="costAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi"></a>

```typescript
public readonly costAnalysisUi: MeteringComputationQueryQueryDefinitionCostAnalysisUi;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#cost_analysis_ui MeteringComputationQuery#cost_analysis_ui}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}.

---

##### `reportQuery`<sup>Required</sup> <a name="reportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery"></a>

```typescript
public readonly reportQuery: MeteringComputationQueryQueryDefinitionReportQuery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#report_query MeteringComputationQuery#report_query}

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}.

---

### MeteringComputationQueryQueryDefinitionCostAnalysisUi <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryQueryDefinitionCostAnalysisUi: meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph">graph</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph">isCumulativeGraph</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}. |

---

##### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph"></a>

```typescript
public readonly graph: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}.

---

##### `isCumulativeGraph`<sup>Optional</sup> <a name="isCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph"></a>

```typescript
public readonly isCumulativeGraph: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}.

---

### MeteringComputationQueryQueryDefinitionReportQuery <a name="MeteringComputationQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryQueryDefinitionReportQuery: meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity">granularity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName">dateRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | forecast block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag">groupByTag</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}. |

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}.

---

##### `dateRangeName`<sup>Optional</sup> <a name="dateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName"></a>

```typescript
public readonly dateRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}.

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast"></a>

```typescript
public readonly forecast: MeteringComputationQueryQueryDefinitionReportQueryForecast;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast MeteringComputationQuery#forecast}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag"></a>

```typescript
public readonly groupByTag: IResolvable | MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by_tag MeteringComputationQuery#group_by_tag}

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}.

---

##### `timeUsageEnded`<sup>Optional</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Optional</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryForecast <a name="MeteringComputationQueryQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryQueryDefinitionReportQueryForecast: meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded">timeForecastEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType">forecastType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted">timeForecastStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}. |

---

##### `timeForecastEnded`<sup>Required</sup> <a name="timeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded"></a>

```typescript
public readonly timeForecastEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}.

---

##### `forecastType`<sup>Optional</sup> <a name="forecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType"></a>

```typescript
public readonly forecastType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}.

---

##### `timeForecastStarted`<sup>Optional</sup> <a name="timeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted"></a>

```typescript
public readonly timeForecastStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryGroupByTag <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryQueryDefinitionReportQueryGroupByTag: meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}.

---

### MeteringComputationQueryTimeouts <a name="MeteringComputationQueryTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

const meteringComputationQueryTimeouts: meteringComputationQuery.MeteringComputationQueryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph">resetGraph</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph">resetIsCumulativeGraph</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraph` <a name="resetGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph"></a>

```typescript
public resetGraph(): void
```

##### `resetIsCumulativeGraph` <a name="resetIsCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph"></a>

```typescript
public resetIsCumulativeGraph(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput">graphInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput">isCumulativeGraphInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">isCumulativeGraph</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graphInput`<sup>Optional</sup> <a name="graphInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput"></a>

```typescript
public readonly graphInput: string;
```

- *Type:* string

---

##### `isCumulativeGraphInput`<sup>Optional</sup> <a name="isCumulativeGraphInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput"></a>

```typescript
public readonly isCumulativeGraphInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```typescript
public readonly graph: string;
```

- *Type:* string

---

##### `isCumulativeGraph`<sup>Required</sup> <a name="isCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```typescript
public readonly isCumulativeGraph: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationQueryQueryDefinitionCostAnalysisUi;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---


### MeteringComputationQueryQueryDefinitionOutputReference <a name="MeteringComputationQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi">putCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery">putReportQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostAnalysisUi` <a name="putCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi"></a>

```typescript
public putCostAnalysisUi(value: MeteringComputationQueryQueryDefinitionCostAnalysisUi): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---

##### `putReportQuery` <a name="putReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery"></a>

```typescript
public putReportQuery(value: MeteringComputationQueryQueryDefinitionReportQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi">costAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery">reportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput">costAnalysisUiInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput">reportQueryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costAnalysisUi`<sup>Required</sup> <a name="costAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```typescript
public readonly costAnalysisUi: MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a>

---

##### `reportQuery`<sup>Required</sup> <a name="reportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```typescript
public readonly reportQuery: MeteringComputationQueryQueryDefinitionReportQueryOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a>

---

##### `costAnalysisUiInput`<sup>Optional</sup> <a name="costAnalysisUiInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput"></a>

```typescript
public readonly costAnalysisUiInput: MeteringComputationQueryQueryDefinitionCostAnalysisUi;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `reportQueryInput`<sup>Optional</sup> <a name="reportQueryInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput"></a>

```typescript
public readonly reportQueryInput: MeteringComputationQueryQueryDefinitionReportQuery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationQueryQueryDefinition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType">resetForecastType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted">resetTimeForecastStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForecastType` <a name="resetForecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType"></a>

```typescript
public resetForecastType(): void
```

##### `resetTimeForecastStarted` <a name="resetTimeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted"></a>

```typescript
public resetTimeForecastStarted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput">forecastTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput">timeForecastEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput">timeForecastStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType">forecastType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">timeForecastEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">timeForecastStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forecastTypeInput`<sup>Optional</sup> <a name="forecastTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput"></a>

```typescript
public readonly forecastTypeInput: string;
```

- *Type:* string

---

##### `timeForecastEndedInput`<sup>Optional</sup> <a name="timeForecastEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput"></a>

```typescript
public readonly timeForecastEndedInput: string;
```

- *Type:* string

---

##### `timeForecastStartedInput`<sup>Optional</sup> <a name="timeForecastStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput"></a>

```typescript
public readonly timeForecastStartedInput: string;
```

- *Type:* string

---

##### `forecastType`<sup>Required</sup> <a name="forecastType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```typescript
public readonly forecastType: string;
```

- *Type:* string

---

##### `timeForecastEnded`<sup>Required</sup> <a name="timeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```typescript
public readonly timeForecastEnded: string;
```

- *Type:* string

---

##### `timeForecastStarted`<sup>Required</sup> <a name="timeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```typescript
public readonly timeForecastStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationQueryQueryDefinitionReportQueryForecast;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```typescript
public get(index: number): MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationQueryQueryDefinitionReportQueryGroupByTag;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast">putForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName">resetDateRangeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast">resetForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded">resetTimeUsageEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted">resetTimeUsageStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForecast` <a name="putForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast"></a>

```typescript
public putForecast(value: MeteringComputationQueryQueryDefinitionReportQueryForecast): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag"></a>

```typescript
public putGroupByTag(value: IResolvable | MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth"></a>

```typescript
public resetCompartmentDepth(): void
```

##### `resetDateRangeName` <a name="resetDateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName"></a>

```typescript
public resetDateRangeName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetForecast` <a name="resetForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast"></a>

```typescript
public resetForecast(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag"></a>

```typescript
public resetGroupByTag(): void
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime"></a>

```typescript
public resetIsAggregateByTime(): void
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType"></a>

```typescript
public resetQueryType(): void
```

##### `resetTimeUsageEnded` <a name="resetTimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded"></a>

```typescript
public resetTimeUsageEnded(): void
```

##### `resetTimeUsageStarted` <a name="resetTimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted"></a>

```typescript
public resetTimeUsageStarted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput">dateRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput">forecastInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput">groupByTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">dateRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forecast`<sup>Required</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```typescript
public readonly forecast: MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput"></a>

```typescript
public readonly compartmentDepthInput: number;
```

- *Type:* number

---

##### `dateRangeNameInput`<sup>Optional</sup> <a name="dateRangeNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput"></a>

```typescript
public readonly dateRangeNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `forecastInput`<sup>Optional</sup> <a name="forecastInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput"></a>

```typescript
public readonly forecastInput: MeteringComputationQueryQueryDefinitionReportQueryForecast;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput"></a>

```typescript
public readonly groupByTagInput: IResolvable | MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>[]

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput"></a>

```typescript
public readonly isAggregateByTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput"></a>

```typescript
public readonly timeUsageEndedInput: string;
```

- *Type:* string

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput"></a>

```typescript
public readonly timeUsageStartedInput: string;
```

- *Type:* string

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `dateRangeName`<sup>Required</sup> <a name="dateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```typescript
public readonly dateRangeName: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationQueryQueryDefinitionReportQuery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---


### MeteringComputationQueryTimeoutsOutputReference <a name="MeteringComputationQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer"></a>

```typescript
import { meteringComputationQuery } from 'rhizo-co-terraform-provider-oci'

new meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationQueryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

---



