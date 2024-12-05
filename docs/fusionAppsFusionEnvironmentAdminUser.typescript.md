# `fusionAppsFusionEnvironmentAdminUser` Submodule <a name="`fusionAppsFusionEnvironmentAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentAdminUser <a name="FusionAppsFusionEnvironmentAdminUser" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user oci_fusion_apps_fusion_environment_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser(scope: Construct, id: string, config: FusionAppsFusionEnvironmentAdminUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig">FusionAppsFusionEnvironmentAdminUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig">FusionAppsFusionEnvironmentAdminUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts"></a>

```typescript
public putTimeouts(value: FusionAppsFusionEnvironmentAdminUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentAdminUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items"></a>

```typescript
public readonly items: FusionAppsFusionEnvironmentAdminUserItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a>

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FusionAppsFusionEnvironmentAdminUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentAdminUserConfig <a name="FusionAppsFusionEnvironmentAdminUserConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentAdminUserConfig: fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}.

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FusionAppsFusionEnvironmentAdminUserTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#timeouts FusionAppsFusionEnvironmentAdminUser#timeouts}

---

### FusionAppsFusionEnvironmentAdminUserItems <a name="FusionAppsFusionEnvironmentAdminUserItems" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentAdminUserItems: fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems = { ... }
```


### FusionAppsFusionEnvironmentAdminUserTimeouts <a name="FusionAppsFusionEnvironmentAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

const fusionAppsFusionEnvironmentAdminUserTimeouts: fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentAdminUserItemsList <a name="FusionAppsFusionEnvironmentAdminUserItemsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get"></a>

```typescript
public get(index: number): FusionAppsFusionEnvironmentAdminUserItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FusionAppsFusionEnvironmentAdminUserItemsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FusionAppsFusionEnvironmentAdminUserItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a>

---


### FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { fusionAppsFusionEnvironmentAdminUser } from 'rhizo-co-terraform-provider-oci'

new fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FusionAppsFusionEnvironmentAdminUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---



