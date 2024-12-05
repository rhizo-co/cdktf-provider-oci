# `dataSafeDatabaseSecurityConfig` Submodule <a name="`dataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDatabaseSecurityConfig <a name="DataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig(scope: Construct, id: string, config: DataSafeDatabaseSecurityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig">putSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger">resetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig">resetSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSqlFirewallConfig` <a name="putSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig"></a>

```typescript
public putSqlFirewallConfig(value: DataSafeDatabaseSecurityConfigSqlFirewallConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeDatabaseSecurityConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefreshTrigger` <a name="resetRefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger"></a>

```typescript
public resetRefreshTrigger(): void
```

##### `resetSqlFirewallConfig` <a name="resetSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig"></a>

```typescript
public resetSqlFirewallConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeDatabaseSecurityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed">timeLastRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">databaseSecurityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput">refreshTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput">sqlFirewallConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sqlFirewallConfig`<sup>Required</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```typescript
public readonly sqlFirewallConfig: DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRefreshed`<sup>Required</sup> <a name="timeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```typescript
public readonly timeLastRefreshed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDatabaseSecurityConfigTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseSecurityConfigIdInput`<sup>Optional</sup> <a name="databaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```typescript
public readonly databaseSecurityConfigIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `refreshTriggerInput`<sup>Optional</sup> <a name="refreshTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput"></a>

```typescript
public readonly refreshTriggerInput: number;
```

- *Type:* number

---

##### `sqlFirewallConfigInput`<sup>Optional</sup> <a name="sqlFirewallConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput"></a>

```typescript
public readonly sqlFirewallConfigInput: DataSafeDatabaseSecurityConfigSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeDatabaseSecurityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```typescript
public readonly databaseSecurityConfigId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDatabaseSecurityConfigConfig <a name="DataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigConfig: dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | sql_firewall_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```typescript
public readonly databaseSecurityConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}.

---

##### `sqlFirewallConfig`<sup>Optional</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig"></a>

```typescript
public readonly sqlFirewallConfig: DataSafeDatabaseSecurityConfigSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

sql_firewall_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#sql_firewall_config DataSafeDatabaseSecurityConfig#sql_firewall_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDatabaseSecurityConfigTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#timeouts DataSafeDatabaseSecurityConfig#timeouts}

---

### DataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigSqlFirewallConfig: dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob">excludeJob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}. |

---

##### `excludeJob`<sup>Optional</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob"></a>

```typescript
public readonly excludeJob: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}.

---

##### `violationLogAutoPurge`<sup>Optional</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge"></a>

```typescript
public readonly violationLogAutoPurge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}.

---

### DataSafeDatabaseSecurityConfigTimeouts <a name="DataSafeDatabaseSecurityConfigTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigTimeouts: dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob">resetExcludeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge">resetViolationLogAutoPurge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeJob` <a name="resetExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob"></a>

```typescript
public resetExcludeJob(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetViolationLogAutoPurge` <a name="resetViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge"></a>

```typescript
public resetViolationLogAutoPurge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput">excludeJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput">violationLogAutoPurgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">excludeJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `excludeJobInput`<sup>Optional</sup> <a name="excludeJobInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput"></a>

```typescript
public readonly excludeJobInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `violationLogAutoPurgeInput`<sup>Optional</sup> <a name="violationLogAutoPurgeInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput"></a>

```typescript
public readonly violationLogAutoPurgeInput: string;
```

- *Type:* string

---

##### `excludeJob`<sup>Required</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```typescript
public readonly excludeJob: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `violationLogAutoPurge`<sup>Required</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```typescript
public readonly violationLogAutoPurge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSafeDatabaseSecurityConfigSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---


### DataSafeDatabaseSecurityConfigTimeoutsOutputReference <a name="DataSafeDatabaseSecurityConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDatabaseSecurityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

---



