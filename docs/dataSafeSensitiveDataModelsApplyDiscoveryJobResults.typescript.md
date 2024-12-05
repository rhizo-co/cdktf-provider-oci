# `dataSafeSensitiveDataModelsApplyDiscoveryJobResults` Submodule <a name="`dataSafeSensitiveDataModelsApplyDiscoveryJobResults` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSensitiveDataModelsApplyDiscoveryJobResults <a name="DataSafeSensitiveDataModelsApplyDiscoveryJobResults" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results oci_data_safe_sensitive_data_models_apply_discovery_job_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

new dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults(scope: Construct, id: string, config: DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSensitiveDataModelsApplyDiscoveryJobResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isConstruct"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformElement"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformResource"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSensitiveDataModelsApplyDiscoveryJobResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSensitiveDataModelsApplyDiscoveryJobResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSensitiveDataModelsApplyDiscoveryJobResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSensitiveDataModelsApplyDiscoveryJobResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference</a>

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig <a name="DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

const dataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig: dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#discovery_job_id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#sensitive_data_model_id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#discovery_job_id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#discovery_job_id}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#sensitive_data_model_id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#sensitive_data_model_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#id DataSafeSensitiveDataModelsApplyDiscoveryJobResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#timeouts DataSafeSensitiveDataModelsApplyDiscoveryJobResults#timeouts}

---

### DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts <a name="DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

const dataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts: dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#create DataSafeSensitiveDataModelsApplyDiscoveryJobResults#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#delete DataSafeSensitiveDataModelsApplyDiscoveryJobResults#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#update DataSafeSensitiveDataModelsApplyDiscoveryJobResults#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#create DataSafeSensitiveDataModelsApplyDiscoveryJobResults#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#delete DataSafeSensitiveDataModelsApplyDiscoveryJobResults#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_apply_discovery_job_results#update DataSafeSensitiveDataModelsApplyDiscoveryJobResults#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference <a name="DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsApplyDiscoveryJobResults } from 'rhizo-co-terraform-provider-oci'

new dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsApplyDiscoveryJobResults.DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts">DataSafeSensitiveDataModelsApplyDiscoveryJobResultsTimeouts</a>

---



