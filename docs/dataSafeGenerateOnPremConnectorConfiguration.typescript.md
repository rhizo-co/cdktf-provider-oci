# `dataSafeGenerateOnPremConnectorConfiguration` Submodule <a name="`dataSafeGenerateOnPremConnectorConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeGenerateOnPremConnectorConfiguration <a name="DataSafeGenerateOnPremConnectorConfiguration" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration oci_data_safe_generate_on_prem_connector_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration(scope: Construct, id: string, config: DataSafeGenerateOnPremConnectorConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig">DataSafeGenerateOnPremConnectorConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig">DataSafeGenerateOnPremConnectorConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeGenerateOnPremConnectorConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeGenerateOnPremConnectorConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeGenerateOnPremConnectorConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeGenerateOnPremConnectorConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeGenerateOnPremConnectorConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeGenerateOnPremConnectorConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference">DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorIdInput">onPremConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorId">onPremConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference">DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onPremConnectorIdInput`<sup>Optional</sup> <a name="onPremConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorIdInput"></a>

```typescript
public readonly onPremConnectorIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeGenerateOnPremConnectorConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onPremConnectorId`<sup>Required</sup> <a name="onPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorId"></a>

```typescript
public readonly onPremConnectorId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeGenerateOnPremConnectorConfigurationConfig <a name="DataSafeGenerateOnPremConnectorConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.Initializer"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataSafeGenerateOnPremConnectorConfigurationConfig: dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.onPremConnectorId">onPremConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#on_prem_connector_id DataSafeGenerateOnPremConnectorConfiguration#on_prem_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#password DataSafeGenerateOnPremConnectorConfiguration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#id DataSafeGenerateOnPremConnectorConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onPremConnectorId`<sup>Required</sup> <a name="onPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.onPremConnectorId"></a>

```typescript
public readonly onPremConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#on_prem_connector_id DataSafeGenerateOnPremConnectorConfiguration#on_prem_connector_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#password DataSafeGenerateOnPremConnectorConfiguration#password}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#id DataSafeGenerateOnPremConnectorConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeGenerateOnPremConnectorConfigurationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#timeouts DataSafeGenerateOnPremConnectorConfiguration#timeouts}

---

### DataSafeGenerateOnPremConnectorConfigurationTimeouts <a name="DataSafeGenerateOnPremConnectorConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.Initializer"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataSafeGenerateOnPremConnectorConfigurationTimeouts: dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#create DataSafeGenerateOnPremConnectorConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#delete DataSafeGenerateOnPremConnectorConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#update DataSafeGenerateOnPremConnectorConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#create DataSafeGenerateOnPremConnectorConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#delete DataSafeGenerateOnPremConnectorConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#update DataSafeGenerateOnPremConnectorConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference <a name="DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeGenerateOnPremConnectorConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeGenerateOnPremConnectorConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

---



