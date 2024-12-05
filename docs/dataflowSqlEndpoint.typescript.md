# `dataflowSqlEndpoint` Submodule <a name="`dataflowSqlEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowSqlEndpoint <a name="DataflowSqlEndpoint" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint oci_dataflow_sql_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpoint(scope: Construct, id: string, config: DataflowSqlEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig">DataflowSqlEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig">DataflowSqlEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig">putDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig">putExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig">resetDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig">resetExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations">resetSparkAdvancedConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDriverShapeConfig` <a name="putDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig"></a>

```typescript
public putDriverShapeConfig(value: DataflowSqlEndpointDriverShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---

##### `putExecutorShapeConfig` <a name="putExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig"></a>

```typescript
public putExecutorShapeConfig(value: DataflowSqlEndpointExecutorShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: DataflowSqlEndpointNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DataflowSqlEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDriverShapeConfig` <a name="resetDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig"></a>

```typescript
public resetDriverShapeConfig(): void
```

##### `resetExecutorShapeConfig` <a name="resetExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig"></a>

```typescript
public resetExecutorShapeConfig(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSparkAdvancedConfigurations` <a name="resetSparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations"></a>

```typescript
public resetSparkAdvancedConfigurations(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowSqlEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowSqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowSqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl">jdbcEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId">lakeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput">driverShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput">driverShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput">executorShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput">executorShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput">maxExecutorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput">minExecutorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput">sparkAdvancedConfigurationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput">sqlEndpointVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape">driverShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape">executorShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount">maxExecutorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount">minExecutorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig"></a>

```typescript
public readonly driverShapeConfig: DataflowSqlEndpointDriverShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a>

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig"></a>

```typescript
public readonly executorShapeConfig: DataflowSqlEndpointExecutorShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a>

---

##### `jdbcEndpointUrl`<sup>Required</sup> <a name="jdbcEndpointUrl" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl"></a>

```typescript
public readonly jdbcEndpointUrl: string;
```

- *Type:* string

---

##### `lakeId`<sup>Required</sup> <a name="lakeId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId"></a>

```typescript
public readonly lakeId: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataflowSqlEndpointNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a>

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DataflowSqlEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri"></a>

```typescript
public readonly warehouseBucketUri: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `driverShapeConfigInput`<sup>Optional</sup> <a name="driverShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput"></a>

```typescript
public readonly driverShapeConfigInput: DataflowSqlEndpointDriverShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---

##### `driverShapeInput`<sup>Optional</sup> <a name="driverShapeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput"></a>

```typescript
public readonly driverShapeInput: string;
```

- *Type:* string

---

##### `executorShapeConfigInput`<sup>Optional</sup> <a name="executorShapeConfigInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput"></a>

```typescript
public readonly executorShapeConfigInput: DataflowSqlEndpointExecutorShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---

##### `executorShapeInput`<sup>Optional</sup> <a name="executorShapeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput"></a>

```typescript
public readonly executorShapeInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxExecutorCountInput`<sup>Optional</sup> <a name="maxExecutorCountInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput"></a>

```typescript
public readonly maxExecutorCountInput: number;
```

- *Type:* number

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `minExecutorCountInput`<sup>Optional</sup> <a name="minExecutorCountInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput"></a>

```typescript
public readonly minExecutorCountInput: number;
```

- *Type:* number

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: DataflowSqlEndpointNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---

##### `sparkAdvancedConfigurationsInput`<sup>Optional</sup> <a name="sparkAdvancedConfigurationsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput"></a>

```typescript
public readonly sparkAdvancedConfigurationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sqlEndpointVersionInput`<sup>Optional</sup> <a name="sqlEndpointVersionInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput"></a>

```typescript
public readonly sqlEndpointVersionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataflowSqlEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape"></a>

```typescript
public readonly driverShape: string;
```

- *Type:* string

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape"></a>

```typescript
public readonly executorShape: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount"></a>

```typescript
public readonly maxExecutorCount: number;
```

- *Type:* number

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount"></a>

```typescript
public readonly minExecutorCount: number;
```

- *Type:* number

---

##### `sparkAdvancedConfigurations`<sup>Required</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations"></a>

```typescript
public readonly sparkAdvancedConfigurations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion"></a>

```typescript
public readonly sqlEndpointVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowSqlEndpointConfig <a name="DataflowSqlEndpointConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointConfig: dataflowSqlEndpoint.DataflowSqlEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape">driverShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape">executorShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount">maxExecutorCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount">minExecutorCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion">sqlEndpointVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations">sparkAdvancedConfigurations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}.

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape"></a>

```typescript
public readonly driverShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}.

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape"></a>

```typescript
public readonly executorShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}.

---

##### `maxExecutorCount`<sup>Required</sup> <a name="maxExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount"></a>

```typescript
public readonly maxExecutorCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}.

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}.

---

##### `minExecutorCount`<sup>Required</sup> <a name="minExecutorCount" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount"></a>

```typescript
public readonly minExecutorCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataflowSqlEndpointNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}

---

##### `sqlEndpointVersion`<sup>Required</sup> <a name="sqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion"></a>

```typescript
public readonly sqlEndpointVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}.

---

##### `driverShapeConfig`<sup>Optional</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig"></a>

```typescript
public readonly driverShapeConfig: DataflowSqlEndpointDriverShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}

---

##### `executorShapeConfig`<sup>Optional</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig"></a>

```typescript
public readonly executorShapeConfig: DataflowSqlEndpointExecutorShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkAdvancedConfigurations`<sup>Optional</sup> <a name="sparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations"></a>

```typescript
public readonly sparkAdvancedConfigurations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataflowSqlEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}

---

### DataflowSqlEndpointDriverShapeConfig <a name="DataflowSqlEndpointDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointDriverShapeConfig: dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointExecutorShapeConfig <a name="DataflowSqlEndpointExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointExecutorShapeConfig: dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointNetworkConfiguration <a name="DataflowSqlEndpointNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointNetworkConfiguration: dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules">accessControlRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]</code> | access_control_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix">hostNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}. |

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}.

---

##### `accessControlRules`<sup>Optional</sup> <a name="accessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules"></a>

```typescript
public readonly accessControlRules: IResolvable | DataflowSqlEndpointNetworkConfigurationAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]

access_control_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#access_control_rules DataflowSqlEndpoint#access_control_rules}

---

##### `hostNamePrefix`<sup>Optional</sup> <a name="hostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix"></a>

```typescript
public readonly hostNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}.

---

### DataflowSqlEndpointNetworkConfigurationAccessControlRules <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointNetworkConfigurationAccessControlRules: dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation">ipNotation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps">vcnIps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}. |

---

##### `ipNotation`<sup>Optional</sup> <a name="ipNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation"></a>

```typescript
public readonly ipNotation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}.

---

##### `vcnIps`<sup>Optional</sup> <a name="vcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps"></a>

```typescript
public readonly vcnIps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}.

---

### DataflowSqlEndpointTimeouts <a name="DataflowSqlEndpointTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataflowSqlEndpointTimeouts: dataflowSqlEndpoint.DataflowSqlEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowSqlEndpointDriverShapeConfigOutputReference <a name="DataflowSqlEndpointDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataflowSqlEndpointDriverShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---


### DataflowSqlEndpointExecutorShapeConfigOutputReference <a name="DataflowSqlEndpointExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataflowSqlEndpointExecutorShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesList <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataflowSqlEndpointNetworkConfigurationAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation">resetIpNotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps">resetVcnIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpNotation` <a name="resetIpNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation"></a>

```typescript
public resetIpNotation(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetVcnIps` <a name="resetVcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps"></a>

```typescript
public resetVcnIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput">ipNotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput">vcnIpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation">ipNotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps">vcnIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipNotationInput`<sup>Optional</sup> <a name="ipNotationInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput"></a>

```typescript
public readonly ipNotationInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `vcnIpsInput`<sup>Optional</sup> <a name="vcnIpsInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput"></a>

```typescript
public readonly vcnIpsInput: string;
```

- *Type:* string

---

##### `ipNotation`<sup>Required</sup> <a name="ipNotation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation"></a>

```typescript
public readonly ipNotation: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `vcnIps`<sup>Required</sup> <a name="vcnIps" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps"></a>

```typescript
public readonly vcnIps: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataflowSqlEndpointNetworkConfigurationAccessControlRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>

---


### DataflowSqlEndpointNetworkConfigurationOutputReference <a name="DataflowSqlEndpointNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules">putAccessControlRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules">resetAccessControlRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix">resetHostNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessControlRules` <a name="putAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules"></a>

```typescript
public putAccessControlRules(value: IResolvable | DataflowSqlEndpointNetworkConfigurationAccessControlRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]

---

##### `resetAccessControlRules` <a name="resetAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules"></a>

```typescript
public resetAccessControlRules(): void
```

##### `resetHostNamePrefix` <a name="resetHostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix"></a>

```typescript
public resetHostNamePrefix(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId"></a>

```typescript
public resetVcnId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules">accessControlRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp">publicEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput">accessControlRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput">hostNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix">hostNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlRules`<sup>Required</sup> <a name="accessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules"></a>

```typescript
public readonly accessControlRules: DataflowSqlEndpointNetworkConfigurationAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a>

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `publicEndpointIp`<sup>Required</sup> <a name="publicEndpointIp" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp"></a>

```typescript
public readonly publicEndpointIp: string;
```

- *Type:* string

---

##### `accessControlRulesInput`<sup>Optional</sup> <a name="accessControlRulesInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput"></a>

```typescript
public readonly accessControlRulesInput: IResolvable | DataflowSqlEndpointNetworkConfigurationAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>[]

---

##### `hostNamePrefixInput`<sup>Optional</sup> <a name="hostNamePrefixInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput"></a>

```typescript
public readonly hostNamePrefixInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `hostNamePrefix`<sup>Required</sup> <a name="hostNamePrefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix"></a>

```typescript
public readonly hostNamePrefix: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataflowSqlEndpointNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---


### DataflowSqlEndpointTimeoutsOutputReference <a name="DataflowSqlEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataflowSqlEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataflowSqlEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

---



