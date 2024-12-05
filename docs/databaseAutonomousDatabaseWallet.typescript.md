# `databaseAutonomousDatabaseWallet` Submodule <a name="`databaseAutonomousDatabaseWallet` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseWallet <a name="DatabaseAutonomousDatabaseWallet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet oci_database_autonomous_database_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet(scope: Construct, id: string, config: DatabaseAutonomousDatabaseWalletConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig">DatabaseAutonomousDatabaseWalletConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig">DatabaseAutonomousDatabaseWalletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetGenerateType">resetGenerateType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetIsRegional">resetIsRegional</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousDatabaseWalletTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetBase64EncodeContent"></a>

```typescript
public resetBase64EncodeContent(): void
```

##### `resetGenerateType` <a name="resetGenerateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetGenerateType"></a>

```typescript
public resetGenerateType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRegional` <a name="resetIsRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetIsRegional"></a>

```typescript
public resetIsRegional(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseWallet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabaseWallet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabaseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference">DatabaseAutonomousDatabaseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateTypeInput">generateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegionalInput">isRegionalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateType">generateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegional">isRegional</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseWalletTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference">DatabaseAutonomousDatabaseWalletTimeoutsOutputReference</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContentInput"></a>

```typescript
public readonly base64EncodeContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `generateTypeInput`<sup>Optional</sup> <a name="generateTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateTypeInput"></a>

```typescript
public readonly generateTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRegionalInput`<sup>Optional</sup> <a name="isRegionalInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegionalInput"></a>

```typescript
public readonly isRegionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousDatabaseWalletTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `generateType`<sup>Required</sup> <a name="generateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.generateType"></a>

```typescript
public readonly generateType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.isRegional"></a>

```typescript
public readonly isRegional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWallet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseWalletConfig <a name="DatabaseAutonomousDatabaseWalletConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseWalletConfig: databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#autonomous_database_id DatabaseAutonomousDatabaseWallet#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#password DatabaseAutonomousDatabaseWallet#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#base64_encode_content DatabaseAutonomousDatabaseWallet#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.generateType">generateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#generate_type DatabaseAutonomousDatabaseWallet#generate_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#id DatabaseAutonomousDatabaseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.isRegional">isRegional</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#is_regional DatabaseAutonomousDatabaseWallet#is_regional}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#autonomous_database_id DatabaseAutonomousDatabaseWallet#autonomous_database_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#password DatabaseAutonomousDatabaseWallet#password}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.base64EncodeContent"></a>

```typescript
public readonly base64EncodeContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#base64_encode_content DatabaseAutonomousDatabaseWallet#base64_encode_content}.

---

##### `generateType`<sup>Optional</sup> <a name="generateType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.generateType"></a>

```typescript
public readonly generateType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#generate_type DatabaseAutonomousDatabaseWallet#generate_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#id DatabaseAutonomousDatabaseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegional`<sup>Optional</sup> <a name="isRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.isRegional"></a>

```typescript
public readonly isRegional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#is_regional DatabaseAutonomousDatabaseWallet#is_regional}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseWalletTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#timeouts DatabaseAutonomousDatabaseWallet#timeouts}

---

### DatabaseAutonomousDatabaseWalletTimeouts <a name="DatabaseAutonomousDatabaseWalletTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseWalletTimeouts: databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#create DatabaseAutonomousDatabaseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#delete DatabaseAutonomousDatabaseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#update DatabaseAutonomousDatabaseWallet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#create DatabaseAutonomousDatabaseWallet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#delete DatabaseAutonomousDatabaseWallet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_wallet#update DatabaseAutonomousDatabaseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseWalletTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseWallet } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseWalletTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseWallet.DatabaseAutonomousDatabaseWalletTimeouts">DatabaseAutonomousDatabaseWalletTimeouts</a>

---



