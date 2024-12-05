# `mysqlMysqlConfiguration` Submodule <a name="`mysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlConfiguration <a name="MysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlConfiguration.MysqlMysqlConfiguration(scope: Construct, id: string, config: MysqlMysqlConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables">putInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables">resetInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId">resetParentConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitVariables` <a name="putInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables"></a>

```typescript
public putInitVariables(value: MysqlMysqlConfigurationInitVariables): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlMysqlConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `putVariables` <a name="putVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables"></a>

```typescript
public putVariables(value: MysqlMysqlConfigurationVariables): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitVariables` <a name="resetInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables"></a>

```typescript
public resetInitVariables(): void
```

##### `resetParentConfigurationId` <a name="resetParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId"></a>

```typescript
public resetParentConfigurationId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVariables` <a name="resetVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables"></a>

```typescript
public resetVariables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput">initVariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput">parentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput">variablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId">parentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `initVariables`<sup>Required</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables"></a>

```typescript
public readonly initVariables: MysqlMysqlConfigurationInitVariablesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables"></a>

```typescript
public readonly variables: MysqlMysqlConfigurationVariablesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initVariablesInput`<sup>Optional</sup> <a name="initVariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput"></a>

```typescript
public readonly initVariablesInput: MysqlMysqlConfigurationInitVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `parentConfigurationIdInput`<sup>Optional</sup> <a name="parentConfigurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput"></a>

```typescript
public readonly parentConfigurationIdInput: string;
```

- *Type:* string

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MysqlMysqlConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput"></a>

```typescript
public readonly variablesInput: MysqlMysqlConfigurationVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentConfigurationId`<sup>Required</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId"></a>

```typescript
public readonly parentConfigurationId: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlConfigurationConfig <a name="MysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlConfigurationConfig: mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId">parentConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initVariables`<sup>Optional</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables"></a>

```typescript
public readonly initVariables: MysqlMysqlConfigurationInitVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `parentConfigurationId`<sup>Optional</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId"></a>

```typescript
public readonly parentConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlConfigurationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables"></a>

```typescript
public readonly variables: MysqlMysqlConfigurationVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

### MysqlMysqlConfigurationInitVariables <a name="MysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlConfigurationInitVariables: mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}. |

---

##### `lowerCaseTableNames`<sup>Optional</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

### MysqlMysqlConfigurationTimeouts <a name="MysqlMysqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlConfigurationTimeouts: mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

### MysqlMysqlConfigurationVariables <a name="MysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlConfigurationVariables: mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit">autocommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables">bigTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType">completionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile">localInfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles">mandatoryRoles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors">maxConnectErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections">maxConnections</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime">maxExecutionTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize">queryPreallocSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize">sortBufferSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode">sqlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings">sqlWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize">tmpTableSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation">transactionIsolation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}. |

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit"></a>

```typescript
public readonly autocommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

##### `bigTables`<sup>Optional</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables"></a>

```typescript
public readonly bigTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

##### `binlogExpireLogsSeconds`<sup>Optional</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds"></a>

```typescript
public readonly binlogExpireLogsSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

##### `binlogRowMetadata`<sup>Optional</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata"></a>

```typescript
public readonly binlogRowMetadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

##### `binlogRowValueOptions`<sup>Optional</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions"></a>

```typescript
public readonly binlogRowValueOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

##### `binlogTransactionCompression`<sup>Optional</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression"></a>

```typescript
public readonly binlogTransactionCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

##### `completionType`<sup>Optional</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType"></a>

```typescript
public readonly completionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

##### `connectionMemoryChunkSize`<sup>Optional</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize"></a>

```typescript
public readonly connectionMemoryChunkSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

##### `connectionMemoryLimit`<sup>Optional</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit"></a>

```typescript
public readonly connectionMemoryLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

##### `cteMaxRecursionDepth`<sup>Optional</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth"></a>

```typescript
public readonly cteMaxRecursionDepth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

##### `defaultAuthenticationPlugin`<sup>Optional</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin"></a>

```typescript
public readonly defaultAuthenticationPlugin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

##### `foreignKeyChecks`<sup>Optional</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks"></a>

```typescript
public readonly foreignKeyChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

##### `generatedRandomPasswordLength`<sup>Optional</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength"></a>

```typescript
public readonly generatedRandomPasswordLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

##### `globalConnectionMemoryLimit`<sup>Optional</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit"></a>

```typescript
public readonly globalConnectionMemoryLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

##### `globalConnectionMemoryTracking`<sup>Optional</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking"></a>

```typescript
public readonly globalConnectionMemoryTracking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

##### `groupReplicationConsistency`<sup>Optional</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency"></a>

```typescript
public readonly groupReplicationConsistency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

##### `innodbBufferPoolDumpPct`<sup>Optional</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct"></a>

```typescript
public readonly innodbBufferPoolDumpPct: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

##### `innodbBufferPoolInstances`<sup>Optional</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances"></a>

```typescript
public readonly innodbBufferPoolInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

##### `innodbBufferPoolSize`<sup>Optional</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize"></a>

```typescript
public readonly innodbBufferPoolSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

##### `innodbDdlBufferSize`<sup>Optional</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize"></a>

```typescript
public readonly innodbDdlBufferSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

##### `innodbDdlThreads`<sup>Optional</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads"></a>

```typescript
public readonly innodbDdlThreads: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

##### `innodbFtEnableStopword`<sup>Optional</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword"></a>

```typescript
public readonly innodbFtEnableStopword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

##### `innodbFtMaxTokenSize`<sup>Optional</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize"></a>

```typescript
public readonly innodbFtMaxTokenSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

##### `innodbFtNumWordOptimize`<sup>Optional</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize"></a>

```typescript
public readonly innodbFtNumWordOptimize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

##### `innodbFtResultCacheLimit`<sup>Optional</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit"></a>

```typescript
public readonly innodbFtResultCacheLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

##### `innodbLogWriterThreads`<sup>Optional</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads"></a>

```typescript
public readonly innodbLogWriterThreads: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

##### `innodbMaxPurgeLag`<sup>Optional</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag"></a>

```typescript
public readonly innodbMaxPurgeLag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

##### `innodbMaxPurgeLagDelay`<sup>Optional</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay"></a>

```typescript
public readonly innodbMaxPurgeLagDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

##### `innodbStatsPersistentSamplePages`<sup>Optional</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages"></a>

```typescript
public readonly innodbStatsPersistentSamplePages: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

##### `innodbStatsTransientSamplePages`<sup>Optional</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages"></a>

```typescript
public readonly innodbStatsTransientSamplePages: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

##### `localInfile`<sup>Optional</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile"></a>

```typescript
public readonly localInfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

##### `mandatoryRoles`<sup>Optional</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles"></a>

```typescript
public readonly mandatoryRoles: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

##### `maxBinlogCacheSize`<sup>Optional</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize"></a>

```typescript
public readonly maxBinlogCacheSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

##### `maxConnectErrors`<sup>Optional</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors"></a>

```typescript
public readonly maxConnectErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

##### `maxExecutionTime`<sup>Optional</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime"></a>

```typescript
public readonly maxExecutionTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

##### `maxPreparedStmtCount`<sup>Optional</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount"></a>

```typescript
public readonly maxPreparedStmtCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

##### `mysqlFirewallMode`<sup>Optional</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode"></a>

```typescript
public readonly mysqlFirewallMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

##### `mysqlxConnectTimeout`<sup>Optional</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout"></a>

```typescript
public readonly mysqlxConnectTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateDefaultCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateMaxClientCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Optional</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix"></a>

```typescript
public readonly mysqlxDocumentIdUniquePrefix: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

##### `mysqlxEnableHelloNotice`<sup>Optional</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice"></a>

```typescript
public readonly mysqlxEnableHelloNotice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Optional</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout"></a>

```typescript
public readonly mysqlxIdleWorkerThreadTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

##### `mysqlxInteractiveTimeout`<sup>Optional</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout"></a>

```typescript
public readonly mysqlxInteractiveTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel"></a>

```typescript
public readonly mysqlxLz4DefaultCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxLz4MaxClientCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

##### `mysqlxMaxAllowedPacket`<sup>Optional</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket"></a>

```typescript
public readonly mysqlxMaxAllowedPacket: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

##### `mysqlxMinWorkerThreads`<sup>Optional</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads"></a>

```typescript
public readonly mysqlxMinWorkerThreads: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

##### `mysqlxReadTimeout`<sup>Optional</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout"></a>

```typescript
public readonly mysqlxReadTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

##### `mysqlxWaitTimeout`<sup>Optional</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout"></a>

```typescript
public readonly mysqlxWaitTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

##### `mysqlxWriteTimeout`<sup>Optional</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout"></a>

```typescript
public readonly mysqlxWriteTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxZstdDefaultCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxZstdMaxClientCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlZstdDefaultCompressionLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

##### `parserMaxMemSize`<sup>Optional</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize"></a>

```typescript
public readonly parserMaxMemSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

##### `queryAllocBlockSize`<sup>Optional</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize"></a>

```typescript
public readonly queryAllocBlockSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

##### `queryPreallocSize`<sup>Optional</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize"></a>

```typescript
public readonly queryPreallocSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

##### `regexpTimeLimit`<sup>Optional</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit"></a>

```typescript
public readonly regexpTimeLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

##### `sqlWarnings`<sup>Optional</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings"></a>

```typescript
public readonly sqlWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

##### `threadPoolDedicatedListeners`<sup>Optional</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners"></a>

```typescript
public readonly threadPoolDedicatedListeners: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

##### `threadPoolMaxTransactionsLimit`<sup>Optional</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit"></a>

```typescript
public readonly threadPoolMaxTransactionsLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

##### `transactionIsolation`<sup>Optional</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation"></a>

```typescript
public readonly transactionIsolation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlConfigurationInitVariablesOutputReference <a name="MysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames">resetLowerCaseTableNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLowerCaseTableNames` <a name="resetLowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames"></a>

```typescript
public resetLowerCaseTableNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput">lowerCaseTableNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lowerCaseTableNamesInput`<sup>Optional</sup> <a name="lowerCaseTableNamesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput"></a>

```typescript
public readonly lowerCaseTableNamesInput: string;
```

- *Type:* string

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlConfigurationInitVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---


### MysqlMysqlConfigurationTimeoutsOutputReference <a name="MysqlMysqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---


### MysqlMysqlConfigurationVariablesOutputReference <a name="MysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit">resetAutocommit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables">resetBigTables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds">resetBinlogExpireLogsSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata">resetBinlogRowMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions">resetBinlogRowValueOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression">resetBinlogTransactionCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType">resetCompletionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize">resetConnectionMemoryChunkSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit">resetConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth">resetCteMaxRecursionDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin">resetDefaultAuthenticationPlugin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks">resetForeignKeyChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength">resetGeneratedRandomPasswordLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit">resetGlobalConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking">resetGlobalConnectionMemoryTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency">resetGroupReplicationConsistency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry">resetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct">resetInnodbBufferPoolDumpPct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances">resetInnodbBufferPoolInstances</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize">resetInnodbBufferPoolSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize">resetInnodbDdlBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads">resetInnodbDdlThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword">resetInnodbFtEnableStopword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize">resetInnodbFtMaxTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize">resetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize">resetInnodbFtNumWordOptimize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit">resetInnodbFtResultCacheLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable">resetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout">resetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads">resetInnodbLogWriterThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag">resetInnodbMaxPurgeLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay">resetInnodbMaxPurgeLagDelay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages">resetInnodbStatsPersistentSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages">resetInnodbStatsTransientSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout">resetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile">resetLocalInfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles">resetMandatoryRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket">resetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize">resetMaxBinlogCacheSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors">resetMaxConnectErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime">resetMaxExecutionTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize">resetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount">resetMaxPreparedStmtCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode">resetMysqlFirewallMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout">resetMysqlxConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel">resetMysqlxDeflateDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel">resetMysqlxDeflateMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix">resetMysqlxDocumentIdUniquePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice">resetMysqlxEnableHelloNotice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout">resetMysqlxIdleWorkerThreadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout">resetMysqlxInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel">resetMysqlxLz4DefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel">resetMysqlxLz4MaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket">resetMysqlxMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads">resetMysqlxMinWorkerThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout">resetMysqlxReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout">resetMysqlxWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout">resetMysqlxWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel">resetMysqlxZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel">resetMysqlxZstdMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel">resetMysqlZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout">resetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout">resetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize">resetParserMaxMemSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize">resetQueryAllocBlockSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize">resetQueryPreallocSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit">resetRegexpTimeLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize">resetSortBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode">resetSqlMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey">resetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings">resetSqlWarnings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners">resetThreadPoolDedicatedListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit">resetThreadPoolMaxTransactionsLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize">resetTmpTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation">resetTransactionIsolation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutocommit` <a name="resetAutocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit"></a>

```typescript
public resetAutocommit(): void
```

##### `resetBigTables` <a name="resetBigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables"></a>

```typescript
public resetBigTables(): void
```

##### `resetBinlogExpireLogsSeconds` <a name="resetBinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds"></a>

```typescript
public resetBinlogExpireLogsSeconds(): void
```

##### `resetBinlogRowMetadata` <a name="resetBinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata"></a>

```typescript
public resetBinlogRowMetadata(): void
```

##### `resetBinlogRowValueOptions` <a name="resetBinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions"></a>

```typescript
public resetBinlogRowValueOptions(): void
```

##### `resetBinlogTransactionCompression` <a name="resetBinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression"></a>

```typescript
public resetBinlogTransactionCompression(): void
```

##### `resetCompletionType` <a name="resetCompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType"></a>

```typescript
public resetCompletionType(): void
```

##### `resetConnectionMemoryChunkSize` <a name="resetConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize"></a>

```typescript
public resetConnectionMemoryChunkSize(): void
```

##### `resetConnectionMemoryLimit` <a name="resetConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit"></a>

```typescript
public resetConnectionMemoryLimit(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetCteMaxRecursionDepth` <a name="resetCteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth"></a>

```typescript
public resetCteMaxRecursionDepth(): void
```

##### `resetDefaultAuthenticationPlugin` <a name="resetDefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin"></a>

```typescript
public resetDefaultAuthenticationPlugin(): void
```

##### `resetForeignKeyChecks` <a name="resetForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks"></a>

```typescript
public resetForeignKeyChecks(): void
```

##### `resetGeneratedRandomPasswordLength` <a name="resetGeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength"></a>

```typescript
public resetGeneratedRandomPasswordLength(): void
```

##### `resetGlobalConnectionMemoryLimit` <a name="resetGlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit"></a>

```typescript
public resetGlobalConnectionMemoryLimit(): void
```

##### `resetGlobalConnectionMemoryTracking` <a name="resetGlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking"></a>

```typescript
public resetGlobalConnectionMemoryTracking(): void
```

##### `resetGroupReplicationConsistency` <a name="resetGroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency"></a>

```typescript
public resetGroupReplicationConsistency(): void
```

##### `resetInformationSchemaStatsExpiry` <a name="resetInformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry"></a>

```typescript
public resetInformationSchemaStatsExpiry(): void
```

##### `resetInnodbBufferPoolDumpPct` <a name="resetInnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct"></a>

```typescript
public resetInnodbBufferPoolDumpPct(): void
```

##### `resetInnodbBufferPoolInstances` <a name="resetInnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances"></a>

```typescript
public resetInnodbBufferPoolInstances(): void
```

##### `resetInnodbBufferPoolSize` <a name="resetInnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize"></a>

```typescript
public resetInnodbBufferPoolSize(): void
```

##### `resetInnodbDdlBufferSize` <a name="resetInnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize"></a>

```typescript
public resetInnodbDdlBufferSize(): void
```

##### `resetInnodbDdlThreads` <a name="resetInnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads"></a>

```typescript
public resetInnodbDdlThreads(): void
```

##### `resetInnodbFtEnableStopword` <a name="resetInnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword"></a>

```typescript
public resetInnodbFtEnableStopword(): void
```

##### `resetInnodbFtMaxTokenSize` <a name="resetInnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize"></a>

```typescript
public resetInnodbFtMaxTokenSize(): void
```

##### `resetInnodbFtMinTokenSize` <a name="resetInnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize"></a>

```typescript
public resetInnodbFtMinTokenSize(): void
```

##### `resetInnodbFtNumWordOptimize` <a name="resetInnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize"></a>

```typescript
public resetInnodbFtNumWordOptimize(): void
```

##### `resetInnodbFtResultCacheLimit` <a name="resetInnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit"></a>

```typescript
public resetInnodbFtResultCacheLimit(): void
```

##### `resetInnodbFtServerStopwordTable` <a name="resetInnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable"></a>

```typescript
public resetInnodbFtServerStopwordTable(): void
```

##### `resetInnodbLockWaitTimeout` <a name="resetInnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout"></a>

```typescript
public resetInnodbLockWaitTimeout(): void
```

##### `resetInnodbLogWriterThreads` <a name="resetInnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads"></a>

```typescript
public resetInnodbLogWriterThreads(): void
```

##### `resetInnodbMaxPurgeLag` <a name="resetInnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag"></a>

```typescript
public resetInnodbMaxPurgeLag(): void
```

##### `resetInnodbMaxPurgeLagDelay` <a name="resetInnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay"></a>

```typescript
public resetInnodbMaxPurgeLagDelay(): void
```

##### `resetInnodbStatsPersistentSamplePages` <a name="resetInnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages"></a>

```typescript
public resetInnodbStatsPersistentSamplePages(): void
```

##### `resetInnodbStatsTransientSamplePages` <a name="resetInnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages"></a>

```typescript
public resetInnodbStatsTransientSamplePages(): void
```

##### `resetInteractiveTimeout` <a name="resetInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout"></a>

```typescript
public resetInteractiveTimeout(): void
```

##### `resetLocalInfile` <a name="resetLocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile"></a>

```typescript
public resetLocalInfile(): void
```

##### `resetMandatoryRoles` <a name="resetMandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles"></a>

```typescript
public resetMandatoryRoles(): void
```

##### `resetMaxAllowedPacket` <a name="resetMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket"></a>

```typescript
public resetMaxAllowedPacket(): void
```

##### `resetMaxBinlogCacheSize` <a name="resetMaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize"></a>

```typescript
public resetMaxBinlogCacheSize(): void
```

##### `resetMaxConnectErrors` <a name="resetMaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors"></a>

```typescript
public resetMaxConnectErrors(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxExecutionTime` <a name="resetMaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime"></a>

```typescript
public resetMaxExecutionTime(): void
```

##### `resetMaxHeapTableSize` <a name="resetMaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize"></a>

```typescript
public resetMaxHeapTableSize(): void
```

##### `resetMaxPreparedStmtCount` <a name="resetMaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount"></a>

```typescript
public resetMaxPreparedStmtCount(): void
```

##### `resetMysqlFirewallMode` <a name="resetMysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode"></a>

```typescript
public resetMysqlFirewallMode(): void
```

##### `resetMysqlxConnectTimeout` <a name="resetMysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout"></a>

```typescript
public resetMysqlxConnectTimeout(): void
```

##### `resetMysqlxDeflateDefaultCompressionLevel` <a name="resetMysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel"></a>

```typescript
public resetMysqlxDeflateDefaultCompressionLevel(): void
```

##### `resetMysqlxDeflateMaxClientCompressionLevel` <a name="resetMysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel"></a>

```typescript
public resetMysqlxDeflateMaxClientCompressionLevel(): void
```

##### `resetMysqlxDocumentIdUniquePrefix` <a name="resetMysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix"></a>

```typescript
public resetMysqlxDocumentIdUniquePrefix(): void
```

##### `resetMysqlxEnableHelloNotice` <a name="resetMysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice"></a>

```typescript
public resetMysqlxEnableHelloNotice(): void
```

##### `resetMysqlxIdleWorkerThreadTimeout` <a name="resetMysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout"></a>

```typescript
public resetMysqlxIdleWorkerThreadTimeout(): void
```

##### `resetMysqlxInteractiveTimeout` <a name="resetMysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout"></a>

```typescript
public resetMysqlxInteractiveTimeout(): void
```

##### `resetMysqlxLz4DefaultCompressionLevel` <a name="resetMysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel"></a>

```typescript
public resetMysqlxLz4DefaultCompressionLevel(): void
```

##### `resetMysqlxLz4MaxClientCompressionLevel` <a name="resetMysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel"></a>

```typescript
public resetMysqlxLz4MaxClientCompressionLevel(): void
```

##### `resetMysqlxMaxAllowedPacket` <a name="resetMysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket"></a>

```typescript
public resetMysqlxMaxAllowedPacket(): void
```

##### `resetMysqlxMinWorkerThreads` <a name="resetMysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads"></a>

```typescript
public resetMysqlxMinWorkerThreads(): void
```

##### `resetMysqlxReadTimeout` <a name="resetMysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout"></a>

```typescript
public resetMysqlxReadTimeout(): void
```

##### `resetMysqlxWaitTimeout` <a name="resetMysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout"></a>

```typescript
public resetMysqlxWaitTimeout(): void
```

##### `resetMysqlxWriteTimeout` <a name="resetMysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout"></a>

```typescript
public resetMysqlxWriteTimeout(): void
```

##### `resetMysqlxZstdDefaultCompressionLevel` <a name="resetMysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel"></a>

```typescript
public resetMysqlxZstdDefaultCompressionLevel(): void
```

##### `resetMysqlxZstdMaxClientCompressionLevel` <a name="resetMysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel"></a>

```typescript
public resetMysqlxZstdMaxClientCompressionLevel(): void
```

##### `resetMysqlZstdDefaultCompressionLevel` <a name="resetMysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel"></a>

```typescript
public resetMysqlZstdDefaultCompressionLevel(): void
```

##### `resetNetReadTimeout` <a name="resetNetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout"></a>

```typescript
public resetNetReadTimeout(): void
```

##### `resetNetWriteTimeout` <a name="resetNetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout"></a>

```typescript
public resetNetWriteTimeout(): void
```

##### `resetParserMaxMemSize` <a name="resetParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize"></a>

```typescript
public resetParserMaxMemSize(): void
```

##### `resetQueryAllocBlockSize` <a name="resetQueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize"></a>

```typescript
public resetQueryAllocBlockSize(): void
```

##### `resetQueryPreallocSize` <a name="resetQueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize"></a>

```typescript
public resetQueryPreallocSize(): void
```

##### `resetRegexpTimeLimit` <a name="resetRegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit"></a>

```typescript
public resetRegexpTimeLimit(): void
```

##### `resetSortBufferSize` <a name="resetSortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize"></a>

```typescript
public resetSortBufferSize(): void
```

##### `resetSqlMode` <a name="resetSqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode"></a>

```typescript
public resetSqlMode(): void
```

##### `resetSqlRequirePrimaryKey` <a name="resetSqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey"></a>

```typescript
public resetSqlRequirePrimaryKey(): void
```

##### `resetSqlWarnings` <a name="resetSqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings"></a>

```typescript
public resetSqlWarnings(): void
```

##### `resetThreadPoolDedicatedListeners` <a name="resetThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners"></a>

```typescript
public resetThreadPoolDedicatedListeners(): void
```

##### `resetThreadPoolMaxTransactionsLimit` <a name="resetThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit"></a>

```typescript
public resetThreadPoolMaxTransactionsLimit(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetTmpTableSize` <a name="resetTmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize"></a>

```typescript
public resetTmpTableSize(): void
```

##### `resetTransactionIsolation` <a name="resetTransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation"></a>

```typescript
public resetTransactionIsolation(): void
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout"></a>

```typescript
public resetWaitTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput">autocommitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput">bigTablesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput">binlogExpireLogsSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput">binlogRowMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput">binlogRowValueOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput">binlogTransactionCompressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput">completionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput">connectionMemoryChunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput">connectionMemoryLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput">cteMaxRecursionDepthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput">defaultAuthenticationPluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput">foreignKeyChecksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput">generatedRandomPasswordLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput">globalConnectionMemoryLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput">globalConnectionMemoryTrackingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput">groupReplicationConsistencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput">informationSchemaStatsExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput">innodbBufferPoolDumpPctInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput">innodbBufferPoolInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput">innodbBufferPoolSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput">innodbDdlBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput">innodbDdlThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput">innodbFtEnableStopwordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput">innodbFtMaxTokenSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput">innodbFtMinTokenSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput">innodbFtNumWordOptimizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput">innodbFtResultCacheLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput">innodbFtServerStopwordTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput">innodbLockWaitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput">innodbLogWriterThreadsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput">innodbMaxPurgeLagDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput">innodbMaxPurgeLagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput">innodbStatsPersistentSamplePagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput">innodbStatsTransientSamplePagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput">interactiveTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput">localInfileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput">mandatoryRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput">maxAllowedPacketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput">maxBinlogCacheSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput">maxConnectErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput">maxExecutionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput">maxHeapTableSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput">maxPreparedStmtCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput">mysqlFirewallModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput">mysqlxConnectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput">mysqlxDeflateDefaultCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput">mysqlxDeflateMaxClientCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput">mysqlxDocumentIdUniquePrefixInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput">mysqlxEnableHelloNoticeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput">mysqlxIdleWorkerThreadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput">mysqlxInteractiveTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput">mysqlxLz4DefaultCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput">mysqlxLz4MaxClientCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput">mysqlxMaxAllowedPacketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput">mysqlxMinWorkerThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput">mysqlxReadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput">mysqlxWaitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput">mysqlxWriteTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput">mysqlxZstdDefaultCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput">mysqlxZstdMaxClientCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput">mysqlZstdDefaultCompressionLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput">netReadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput">netWriteTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput">parserMaxMemSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput">queryAllocBlockSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput">queryPreallocSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput">regexpTimeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput">sortBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput">sqlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput">sqlRequirePrimaryKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput">sqlWarningsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput">threadPoolDedicatedListenersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput">threadPoolMaxTransactionsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput">tmpTableSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput">transactionIsolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables">bigTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType">completionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile">localInfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">mandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">maxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">maxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">queryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">sqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">sqlWarnings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">transactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autocommitInput`<sup>Optional</sup> <a name="autocommitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput"></a>

```typescript
public readonly autocommitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bigTablesInput`<sup>Optional</sup> <a name="bigTablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput"></a>

```typescript
public readonly bigTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binlogExpireLogsSecondsInput`<sup>Optional</sup> <a name="binlogExpireLogsSecondsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput"></a>

```typescript
public readonly binlogExpireLogsSecondsInput: number;
```

- *Type:* number

---

##### `binlogRowMetadataInput`<sup>Optional</sup> <a name="binlogRowMetadataInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput"></a>

```typescript
public readonly binlogRowMetadataInput: string;
```

- *Type:* string

---

##### `binlogRowValueOptionsInput`<sup>Optional</sup> <a name="binlogRowValueOptionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput"></a>

```typescript
public readonly binlogRowValueOptionsInput: string;
```

- *Type:* string

---

##### `binlogTransactionCompressionInput`<sup>Optional</sup> <a name="binlogTransactionCompressionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput"></a>

```typescript
public readonly binlogTransactionCompressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `completionTypeInput`<sup>Optional</sup> <a name="completionTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput"></a>

```typescript
public readonly completionTypeInput: string;
```

- *Type:* string

---

##### `connectionMemoryChunkSizeInput`<sup>Optional</sup> <a name="connectionMemoryChunkSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput"></a>

```typescript
public readonly connectionMemoryChunkSizeInput: number;
```

- *Type:* number

---

##### `connectionMemoryLimitInput`<sup>Optional</sup> <a name="connectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput"></a>

```typescript
public readonly connectionMemoryLimitInput: string;
```

- *Type:* string

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `cteMaxRecursionDepthInput`<sup>Optional</sup> <a name="cteMaxRecursionDepthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput"></a>

```typescript
public readonly cteMaxRecursionDepthInput: string;
```

- *Type:* string

---

##### `defaultAuthenticationPluginInput`<sup>Optional</sup> <a name="defaultAuthenticationPluginInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput"></a>

```typescript
public readonly defaultAuthenticationPluginInput: string;
```

- *Type:* string

---

##### `foreignKeyChecksInput`<sup>Optional</sup> <a name="foreignKeyChecksInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput"></a>

```typescript
public readonly foreignKeyChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `generatedRandomPasswordLengthInput`<sup>Optional</sup> <a name="generatedRandomPasswordLengthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput"></a>

```typescript
public readonly generatedRandomPasswordLengthInput: number;
```

- *Type:* number

---

##### `globalConnectionMemoryLimitInput`<sup>Optional</sup> <a name="globalConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput"></a>

```typescript
public readonly globalConnectionMemoryLimitInput: string;
```

- *Type:* string

---

##### `globalConnectionMemoryTrackingInput`<sup>Optional</sup> <a name="globalConnectionMemoryTrackingInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput"></a>

```typescript
public readonly globalConnectionMemoryTrackingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupReplicationConsistencyInput`<sup>Optional</sup> <a name="groupReplicationConsistencyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput"></a>

```typescript
public readonly groupReplicationConsistencyInput: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="informationSchemaStatsExpiryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```typescript
public readonly informationSchemaStatsExpiryInput: number;
```

- *Type:* number

---

##### `innodbBufferPoolDumpPctInput`<sup>Optional</sup> <a name="innodbBufferPoolDumpPctInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput"></a>

```typescript
public readonly innodbBufferPoolDumpPctInput: number;
```

- *Type:* number

---

##### `innodbBufferPoolInstancesInput`<sup>Optional</sup> <a name="innodbBufferPoolInstancesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput"></a>

```typescript
public readonly innodbBufferPoolInstancesInput: number;
```

- *Type:* number

---

##### `innodbBufferPoolSizeInput`<sup>Optional</sup> <a name="innodbBufferPoolSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput"></a>

```typescript
public readonly innodbBufferPoolSizeInput: string;
```

- *Type:* string

---

##### `innodbDdlBufferSizeInput`<sup>Optional</sup> <a name="innodbDdlBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput"></a>

```typescript
public readonly innodbDdlBufferSizeInput: string;
```

- *Type:* string

---

##### `innodbDdlThreadsInput`<sup>Optional</sup> <a name="innodbDdlThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput"></a>

```typescript
public readonly innodbDdlThreadsInput: number;
```

- *Type:* number

---

##### `innodbFtEnableStopwordInput`<sup>Optional</sup> <a name="innodbFtEnableStopwordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput"></a>

```typescript
public readonly innodbFtEnableStopwordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbFtMaxTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMaxTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput"></a>

```typescript
public readonly innodbFtMaxTokenSizeInput: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMinTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```typescript
public readonly innodbFtMinTokenSizeInput: number;
```

- *Type:* number

---

##### `innodbFtNumWordOptimizeInput`<sup>Optional</sup> <a name="innodbFtNumWordOptimizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput"></a>

```typescript
public readonly innodbFtNumWordOptimizeInput: number;
```

- *Type:* number

---

##### `innodbFtResultCacheLimitInput`<sup>Optional</sup> <a name="innodbFtResultCacheLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput"></a>

```typescript
public readonly innodbFtResultCacheLimitInput: string;
```

- *Type:* string

---

##### `innodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="innodbFtServerStopwordTableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```typescript
public readonly innodbFtServerStopwordTableInput: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="innodbLockWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```typescript
public readonly innodbLockWaitTimeoutInput: number;
```

- *Type:* number

---

##### `innodbLogWriterThreadsInput`<sup>Optional</sup> <a name="innodbLogWriterThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput"></a>

```typescript
public readonly innodbLogWriterThreadsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbMaxPurgeLagDelayInput`<sup>Optional</sup> <a name="innodbMaxPurgeLagDelayInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput"></a>

```typescript
public readonly innodbMaxPurgeLagDelayInput: number;
```

- *Type:* number

---

##### `innodbMaxPurgeLagInput`<sup>Optional</sup> <a name="innodbMaxPurgeLagInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput"></a>

```typescript
public readonly innodbMaxPurgeLagInput: string;
```

- *Type:* string

---

##### `innodbStatsPersistentSamplePagesInput`<sup>Optional</sup> <a name="innodbStatsPersistentSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput"></a>

```typescript
public readonly innodbStatsPersistentSamplePagesInput: string;
```

- *Type:* string

---

##### `innodbStatsTransientSamplePagesInput`<sup>Optional</sup> <a name="innodbStatsTransientSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput"></a>

```typescript
public readonly innodbStatsTransientSamplePagesInput: string;
```

- *Type:* string

---

##### `interactiveTimeoutInput`<sup>Optional</sup> <a name="interactiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput"></a>

```typescript
public readonly interactiveTimeoutInput: number;
```

- *Type:* number

---

##### `localInfileInput`<sup>Optional</sup> <a name="localInfileInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput"></a>

```typescript
public readonly localInfileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mandatoryRolesInput`<sup>Optional</sup> <a name="mandatoryRolesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput"></a>

```typescript
public readonly mandatoryRolesInput: string;
```

- *Type:* string

---

##### `maxAllowedPacketInput`<sup>Optional</sup> <a name="maxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput"></a>

```typescript
public readonly maxAllowedPacketInput: number;
```

- *Type:* number

---

##### `maxBinlogCacheSizeInput`<sup>Optional</sup> <a name="maxBinlogCacheSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput"></a>

```typescript
public readonly maxBinlogCacheSizeInput: string;
```

- *Type:* string

---

##### `maxConnectErrorsInput`<sup>Optional</sup> <a name="maxConnectErrorsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput"></a>

```typescript
public readonly maxConnectErrorsInput: string;
```

- *Type:* string

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxExecutionTimeInput`<sup>Optional</sup> <a name="maxExecutionTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput"></a>

```typescript
public readonly maxExecutionTimeInput: string;
```

- *Type:* string

---

##### `maxHeapTableSizeInput`<sup>Optional</sup> <a name="maxHeapTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput"></a>

```typescript
public readonly maxHeapTableSizeInput: string;
```

- *Type:* string

---

##### `maxPreparedStmtCountInput`<sup>Optional</sup> <a name="maxPreparedStmtCountInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput"></a>

```typescript
public readonly maxPreparedStmtCountInput: number;
```

- *Type:* number

---

##### `mysqlFirewallModeInput`<sup>Optional</sup> <a name="mysqlFirewallModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput"></a>

```typescript
public readonly mysqlFirewallModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mysqlxConnectTimeoutInput`<sup>Optional</sup> <a name="mysqlxConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput"></a>

```typescript
public readonly mysqlxConnectTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxDeflateDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxDeflateDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput"></a>

```typescript
public readonly mysqlxDeflateDefaultCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlxDeflateMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxDeflateMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput"></a>

```typescript
public readonly mysqlxDeflateMaxClientCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlxDocumentIdUniquePrefixInput`<sup>Optional</sup> <a name="mysqlxDocumentIdUniquePrefixInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput"></a>

```typescript
public readonly mysqlxDocumentIdUniquePrefixInput: number;
```

- *Type:* number

---

##### `mysqlxEnableHelloNoticeInput`<sup>Optional</sup> <a name="mysqlxEnableHelloNoticeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput"></a>

```typescript
public readonly mysqlxEnableHelloNoticeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeoutInput`<sup>Optional</sup> <a name="mysqlxIdleWorkerThreadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput"></a>

```typescript
public readonly mysqlxIdleWorkerThreadTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxInteractiveTimeoutInput`<sup>Optional</sup> <a name="mysqlxInteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput"></a>

```typescript
public readonly mysqlxInteractiveTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxLz4DefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxLz4DefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput"></a>

```typescript
public readonly mysqlxLz4DefaultCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlxLz4MaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxLz4MaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput"></a>

```typescript
public readonly mysqlxLz4MaxClientCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlxMaxAllowedPacketInput`<sup>Optional</sup> <a name="mysqlxMaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput"></a>

```typescript
public readonly mysqlxMaxAllowedPacketInput: number;
```

- *Type:* number

---

##### `mysqlxMinWorkerThreadsInput`<sup>Optional</sup> <a name="mysqlxMinWorkerThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput"></a>

```typescript
public readonly mysqlxMinWorkerThreadsInput: number;
```

- *Type:* number

---

##### `mysqlxReadTimeoutInput`<sup>Optional</sup> <a name="mysqlxReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput"></a>

```typescript
public readonly mysqlxReadTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxWaitTimeoutInput`<sup>Optional</sup> <a name="mysqlxWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput"></a>

```typescript
public readonly mysqlxWaitTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxWriteTimeoutInput`<sup>Optional</sup> <a name="mysqlxWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput"></a>

```typescript
public readonly mysqlxWriteTimeoutInput: number;
```

- *Type:* number

---

##### `mysqlxZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput"></a>

```typescript
public readonly mysqlxZstdDefaultCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlxZstdMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxZstdMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput"></a>

```typescript
public readonly mysqlxZstdMaxClientCompressionLevelInput: number;
```

- *Type:* number

---

##### `mysqlZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput"></a>

```typescript
public readonly mysqlZstdDefaultCompressionLevelInput: number;
```

- *Type:* number

---

##### `netReadTimeoutInput`<sup>Optional</sup> <a name="netReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput"></a>

```typescript
public readonly netReadTimeoutInput: number;
```

- *Type:* number

---

##### `netWriteTimeoutInput`<sup>Optional</sup> <a name="netWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput"></a>

```typescript
public readonly netWriteTimeoutInput: number;
```

- *Type:* number

---

##### `parserMaxMemSizeInput`<sup>Optional</sup> <a name="parserMaxMemSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput"></a>

```typescript
public readonly parserMaxMemSizeInput: string;
```

- *Type:* string

---

##### `queryAllocBlockSizeInput`<sup>Optional</sup> <a name="queryAllocBlockSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput"></a>

```typescript
public readonly queryAllocBlockSizeInput: string;
```

- *Type:* string

---

##### `queryPreallocSizeInput`<sup>Optional</sup> <a name="queryPreallocSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput"></a>

```typescript
public readonly queryPreallocSizeInput: string;
```

- *Type:* string

---

##### `regexpTimeLimitInput`<sup>Optional</sup> <a name="regexpTimeLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput"></a>

```typescript
public readonly regexpTimeLimitInput: number;
```

- *Type:* number

---

##### `sortBufferSizeInput`<sup>Optional</sup> <a name="sortBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput"></a>

```typescript
public readonly sortBufferSizeInput: string;
```

- *Type:* string

---

##### `sqlModeInput`<sup>Optional</sup> <a name="sqlModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput"></a>

```typescript
public readonly sqlModeInput: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="sqlRequirePrimaryKeyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```typescript
public readonly sqlRequirePrimaryKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sqlWarningsInput`<sup>Optional</sup> <a name="sqlWarningsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput"></a>

```typescript
public readonly sqlWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolDedicatedListenersInput`<sup>Optional</sup> <a name="threadPoolDedicatedListenersInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput"></a>

```typescript
public readonly threadPoolDedicatedListenersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimitInput`<sup>Optional</sup> <a name="threadPoolMaxTransactionsLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput"></a>

```typescript
public readonly threadPoolMaxTransactionsLimitInput: number;
```

- *Type:* number

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `tmpTableSizeInput`<sup>Optional</sup> <a name="tmpTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput"></a>

```typescript
public readonly tmpTableSizeInput: string;
```

- *Type:* string

---

##### `transactionIsolationInput`<sup>Optional</sup> <a name="transactionIsolationInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput"></a>

```typescript
public readonly transactionIsolationInput: string;
```

- *Type:* string

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput"></a>

```typescript
public readonly waitTimeoutInput: number;
```

- *Type:* number

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```typescript
public readonly autocommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bigTables`<sup>Required</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```typescript
public readonly bigTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binlogExpireLogsSeconds`<sup>Required</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```typescript
public readonly binlogExpireLogsSeconds: number;
```

- *Type:* number

---

##### `binlogRowMetadata`<sup>Required</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```typescript
public readonly binlogRowMetadata: string;
```

- *Type:* string

---

##### `binlogRowValueOptions`<sup>Required</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```typescript
public readonly binlogRowValueOptions: string;
```

- *Type:* string

---

##### `binlogTransactionCompression`<sup>Required</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```typescript
public readonly binlogTransactionCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `completionType`<sup>Required</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```typescript
public readonly completionType: string;
```

- *Type:* string

---

##### `connectionMemoryChunkSize`<sup>Required</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```typescript
public readonly connectionMemoryChunkSize: number;
```

- *Type:* number

---

##### `connectionMemoryLimit`<sup>Required</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```typescript
public readonly connectionMemoryLimit: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `cteMaxRecursionDepth`<sup>Required</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```typescript
public readonly cteMaxRecursionDepth: string;
```

- *Type:* string

---

##### `defaultAuthenticationPlugin`<sup>Required</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```typescript
public readonly defaultAuthenticationPlugin: string;
```

- *Type:* string

---

##### `foreignKeyChecks`<sup>Required</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```typescript
public readonly foreignKeyChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `generatedRandomPasswordLength`<sup>Required</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```typescript
public readonly generatedRandomPasswordLength: number;
```

- *Type:* number

---

##### `globalConnectionMemoryLimit`<sup>Required</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```typescript
public readonly globalConnectionMemoryLimit: string;
```

- *Type:* string

---

##### `globalConnectionMemoryTracking`<sup>Required</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```typescript
public readonly globalConnectionMemoryTracking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupReplicationConsistency`<sup>Required</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```typescript
public readonly groupReplicationConsistency: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

---

##### `innodbBufferPoolDumpPct`<sup>Required</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```typescript
public readonly innodbBufferPoolDumpPct: number;
```

- *Type:* number

---

##### `innodbBufferPoolInstances`<sup>Required</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```typescript
public readonly innodbBufferPoolInstances: number;
```

- *Type:* number

---

##### `innodbBufferPoolSize`<sup>Required</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```typescript
public readonly innodbBufferPoolSize: string;
```

- *Type:* string

---

##### `innodbDdlBufferSize`<sup>Required</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```typescript
public readonly innodbDdlBufferSize: string;
```

- *Type:* string

---

##### `innodbDdlThreads`<sup>Required</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```typescript
public readonly innodbDdlThreads: number;
```

- *Type:* number

---

##### `innodbFtEnableStopword`<sup>Required</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```typescript
public readonly innodbFtEnableStopword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbFtMaxTokenSize`<sup>Required</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```typescript
public readonly innodbFtMaxTokenSize: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

---

##### `innodbFtNumWordOptimize`<sup>Required</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```typescript
public readonly innodbFtNumWordOptimize: number;
```

- *Type:* number

---

##### `innodbFtResultCacheLimit`<sup>Required</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```typescript
public readonly innodbFtResultCacheLimit: string;
```

- *Type:* string

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

---

##### `innodbLogWriterThreads`<sup>Required</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```typescript
public readonly innodbLogWriterThreads: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbMaxPurgeLag`<sup>Required</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```typescript
public readonly innodbMaxPurgeLag: string;
```

- *Type:* string

---

##### `innodbMaxPurgeLagDelay`<sup>Required</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```typescript
public readonly innodbMaxPurgeLagDelay: number;
```

- *Type:* number

---

##### `innodbStatsPersistentSamplePages`<sup>Required</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```typescript
public readonly innodbStatsPersistentSamplePages: string;
```

- *Type:* string

---

##### `innodbStatsTransientSamplePages`<sup>Required</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```typescript
public readonly innodbStatsTransientSamplePages: string;
```

- *Type:* string

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

---

##### `localInfile`<sup>Required</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```typescript
public readonly localInfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mandatoryRoles`<sup>Required</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```typescript
public readonly mandatoryRoles: string;
```

- *Type:* string

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

---

##### `maxBinlogCacheSize`<sup>Required</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```typescript
public readonly maxBinlogCacheSize: string;
```

- *Type:* string

---

##### `maxConnectErrors`<sup>Required</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```typescript
public readonly maxConnectErrors: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxExecutionTime`<sup>Required</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```typescript
public readonly maxExecutionTime: string;
```

- *Type:* string

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: string;
```

- *Type:* string

---

##### `maxPreparedStmtCount`<sup>Required</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```typescript
public readonly maxPreparedStmtCount: number;
```

- *Type:* number

---

##### `mysqlFirewallMode`<sup>Required</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```typescript
public readonly mysqlFirewallMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mysqlxConnectTimeout`<sup>Required</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```typescript
public readonly mysqlxConnectTimeout: number;
```

- *Type:* number

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```typescript
public readonly mysqlxDocumentIdUniquePrefix: number;
```

- *Type:* number

---

##### `mysqlxEnableHelloNotice`<sup>Required</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```typescript
public readonly mysqlxEnableHelloNotice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```typescript
public readonly mysqlxIdleWorkerThreadTimeout: number;
```

- *Type:* number

---

##### `mysqlxInteractiveTimeout`<sup>Required</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```typescript
public readonly mysqlxInteractiveTimeout: number;
```

- *Type:* number

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```typescript
public readonly mysqlxLz4DefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxLz4MaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxMaxAllowedPacket`<sup>Required</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```typescript
public readonly mysqlxMaxAllowedPacket: number;
```

- *Type:* number

---

##### `mysqlxMinWorkerThreads`<sup>Required</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```typescript
public readonly mysqlxMinWorkerThreads: number;
```

- *Type:* number

---

##### `mysqlxReadTimeout`<sup>Required</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```typescript
public readonly mysqlxReadTimeout: number;
```

- *Type:* number

---

##### `mysqlxWaitTimeout`<sup>Required</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```typescript
public readonly mysqlxWaitTimeout: number;
```

- *Type:* number

---

##### `mysqlxWriteTimeout`<sup>Required</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```typescript
public readonly mysqlxWriteTimeout: number;
```

- *Type:* number

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxZstdMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

---

##### `parserMaxMemSize`<sup>Required</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```typescript
public readonly parserMaxMemSize: string;
```

- *Type:* string

---

##### `queryAllocBlockSize`<sup>Required</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```typescript
public readonly queryAllocBlockSize: string;
```

- *Type:* string

---

##### `queryPreallocSize`<sup>Required</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```typescript
public readonly queryPreallocSize: string;
```

- *Type:* string

---

##### `regexpTimeLimit`<sup>Required</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```typescript
public readonly regexpTimeLimit: number;
```

- *Type:* number

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: string;
```

- *Type:* string

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sqlWarnings`<sup>Required</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```typescript
public readonly sqlWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolDedicatedListeners`<sup>Required</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```typescript
public readonly threadPoolDedicatedListeners: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```typescript
public readonly threadPoolMaxTransactionsLimit: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: string;
```

- *Type:* string

---

##### `transactionIsolation`<sup>Required</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```typescript
public readonly transactionIsolation: string;
```

- *Type:* string

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlConfigurationVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---



