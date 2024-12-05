# `dataSafeReportDefinition` Submodule <a name="`dataSafeReportDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeReportDefinition <a name="DataSafeReportDefinition" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinition(scope: Construct, id: string, config: DataSafeReportDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig">DataSafeReportDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig">DataSafeReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters">putColumnFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo">putColumnInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings">putColumnSortings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary">putSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnFilters` <a name="putColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters"></a>

```typescript
public putColumnFilters(value: IResolvable | DataSafeReportDefinitionColumnFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]

---

##### `putColumnInfo` <a name="putColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo"></a>

```typescript
public putColumnInfo(value: IResolvable | DataSafeReportDefinitionColumnInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]

---

##### `putColumnSortings` <a name="putColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings"></a>

```typescript
public putColumnSortings(value: IResolvable | DataSafeReportDefinitionColumnSortings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]

---

##### `putSummary` <a name="putSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary"></a>

```typescript
public putSummary(value: IResolvable | DataSafeReportDefinitionSummary[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeReportDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

dataSafeReportDefinition.DataSafeReportDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeReportDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters">columnFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo">columnInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings">columnSortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder">displayOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded">isSeeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan">recordTimeSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId">scheduledReportCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType">scheduledReportMimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName">scheduledReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit">scheduledReportRowLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter">scimFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary">summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput">columnFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput">columnInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput">columnSortingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput">summaryInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `columnFilters`<sup>Required</sup> <a name="columnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters"></a>

```typescript
public readonly columnFilters: DataSafeReportDefinitionColumnFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a>

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo"></a>

```typescript
public readonly columnInfo: DataSafeReportDefinitionColumnInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a>

---

##### `columnSortings`<sup>Required</sup> <a name="columnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings"></a>

```typescript
public readonly columnSortings: DataSafeReportDefinitionColumnSortingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a>

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

---

##### `isSeeded`<sup>Required</sup> <a name="isSeeded" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded"></a>

```typescript
public readonly isSeeded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `recordTimeSpan`<sup>Required</sup> <a name="recordTimeSpan" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan"></a>

```typescript
public readonly recordTimeSpan: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduledReportCompartmentId`<sup>Required</sup> <a name="scheduledReportCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId"></a>

```typescript
public readonly scheduledReportCompartmentId: string;
```

- *Type:* string

---

##### `scheduledReportMimeType`<sup>Required</sup> <a name="scheduledReportMimeType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType"></a>

```typescript
public readonly scheduledReportMimeType: string;
```

- *Type:* string

---

##### `scheduledReportName`<sup>Required</sup> <a name="scheduledReportName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName"></a>

```typescript
public readonly scheduledReportName: string;
```

- *Type:* string

---

##### `scheduledReportRowLimit`<sup>Required</sup> <a name="scheduledReportRowLimit" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit"></a>

```typescript
public readonly scheduledReportRowLimit: number;
```

- *Type:* number

---

##### `scimFilter`<sup>Required</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter"></a>

```typescript
public readonly scimFilter: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary"></a>

```typescript
public readonly summary: DataSafeReportDefinitionSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeReportDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `columnFiltersInput`<sup>Optional</sup> <a name="columnFiltersInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput"></a>

```typescript
public readonly columnFiltersInput: IResolvable | DataSafeReportDefinitionColumnFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]

---

##### `columnInfoInput`<sup>Optional</sup> <a name="columnInfoInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput"></a>

```typescript
public readonly columnInfoInput: IResolvable | DataSafeReportDefinitionColumnInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]

---

##### `columnSortingsInput`<sup>Optional</sup> <a name="columnSortingsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput"></a>

```typescript
public readonly columnSortingsInput: IResolvable | DataSafeReportDefinitionColumnSortings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput"></a>

```typescript
public readonly summaryInput: IResolvable | DataSafeReportDefinitionSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeReportDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeReportDefinitionColumnFilters <a name="DataSafeReportDefinitionColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionColumnFilters: dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions">expressions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}. |

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions"></a>

```typescript
public readonly expressions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}.

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}.

---

### DataSafeReportDefinitionColumnInfo <a name="DataSafeReportDefinitionColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionColumnInfo: dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder">displayOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}.

---

### DataSafeReportDefinitionColumnSortings <a name="DataSafeReportDefinitionColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionColumnSortings: dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending">isAscending</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder">sortingOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isAscending`<sup>Required</sup> <a name="isAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending"></a>

```typescript
public readonly isAscending: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}.

---

##### `sortingOrder`<sup>Required</sup> <a name="sortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder"></a>

```typescript
public readonly sortingOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}.

---

### DataSafeReportDefinitionConfig <a name="DataSafeReportDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionConfig: dataSafeReportDefinition.DataSafeReportDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters">columnFilters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]</code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo">columnInfo</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]</code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings">columnSortings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]</code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary">summary</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]</code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnFilters`<sup>Required</sup> <a name="columnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters"></a>

```typescript
public readonly columnFilters: IResolvable | DataSafeReportDefinitionColumnFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo"></a>

```typescript
public readonly columnInfo: IResolvable | DataSafeReportDefinitionColumnInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `columnSortings`<sup>Required</sup> <a name="columnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings"></a>

```typescript
public readonly columnSortings: IResolvable | DataSafeReportDefinitionColumnSortings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary"></a>

```typescript
public readonly summary: IResolvable | DataSafeReportDefinitionSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeReportDefinitionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

### DataSafeReportDefinitionSummary <a name="DataSafeReportDefinitionSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionSummary: dataSafeReportDefinition.DataSafeReportDefinitionSummary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder">displayOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf">countOf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName">groupByFieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter">scimFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}. |

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}.

---

##### `countOf`<sup>Optional</sup> <a name="countOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf"></a>

```typescript
public readonly countOf: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}.

---

##### `groupByFieldName`<sup>Optional</sup> <a name="groupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName"></a>

```typescript
public readonly groupByFieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}.

---

##### `isHidden`<sup>Optional</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `scimFilter`<sup>Optional</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter"></a>

```typescript
public readonly scimFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}.

---

### DataSafeReportDefinitionTimeouts <a name="DataSafeReportDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

const dataSafeReportDefinitionTimeouts: dataSafeReportDefinition.DataSafeReportDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeReportDefinitionColumnFiltersList <a name="DataSafeReportDefinitionColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get"></a>

```typescript
public get(index: number): DataSafeReportDefinitionColumnFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>[]

---


### DataSafeReportDefinitionColumnFiltersOutputReference <a name="DataSafeReportDefinitionColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions">expressions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput"></a>

```typescript
public readonly expressionsInput: string[];
```

- *Type:* string[]

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput"></a>

```typescript
public readonly isHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions"></a>

```typescript
public readonly expressions: string[];
```

- *Type:* string[]

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnFilters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>

---


### DataSafeReportDefinitionColumnInfoList <a name="DataSafeReportDefinitionColumnInfoList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get"></a>

```typescript
public get(index: number): DataSafeReportDefinitionColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>[]

---


### DataSafeReportDefinitionColumnInfoOutputReference <a name="DataSafeReportDefinitionColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType">resetDataType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput">displayOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder">displayOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `displayOrderInput`<sup>Optional</sup> <a name="displayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput"></a>

```typescript
public readonly displayOrderInput: number;
```

- *Type:* number

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput"></a>

```typescript
public readonly isHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnInfo;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>

---


### DataSafeReportDefinitionColumnSortingsList <a name="DataSafeReportDefinitionColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get"></a>

```typescript
public get(index: number): DataSafeReportDefinitionColumnSortingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnSortings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>[]

---


### DataSafeReportDefinitionColumnSortingsOutputReference <a name="DataSafeReportDefinitionColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput">isAscendingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput">sortingOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending">isAscending</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder">sortingOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `isAscendingInput`<sup>Optional</sup> <a name="isAscendingInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput"></a>

```typescript
public readonly isAscendingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortingOrderInput`<sup>Optional</sup> <a name="sortingOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput"></a>

```typescript
public readonly sortingOrderInput: number;
```

- *Type:* number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `isAscending`<sup>Required</sup> <a name="isAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending"></a>

```typescript
public readonly isAscending: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortingOrder`<sup>Required</sup> <a name="sortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder"></a>

```typescript
public readonly sortingOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionColumnSortings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>

---


### DataSafeReportDefinitionSummaryList <a name="DataSafeReportDefinitionSummaryList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get"></a>

```typescript
public get(index: number): DataSafeReportDefinitionSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>[]

---


### DataSafeReportDefinitionSummaryOutputReference <a name="DataSafeReportDefinitionSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf">resetCountOf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName">resetGroupByFieldName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden">resetIsHidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter">resetScimFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountOf` <a name="resetCountOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf"></a>

```typescript
public resetCountOf(): void
```

##### `resetGroupByFieldName` <a name="resetGroupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName"></a>

```typescript
public resetGroupByFieldName(): void
```

##### `resetIsHidden` <a name="resetIsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden"></a>

```typescript
public resetIsHidden(): void
```

##### `resetScimFilter` <a name="resetScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter"></a>

```typescript
public resetScimFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput">countOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput">displayOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput">groupByFieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput">scimFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf">countOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder">displayOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName">groupByFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter">scimFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countOfInput`<sup>Optional</sup> <a name="countOfInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput"></a>

```typescript
public readonly countOfInput: string;
```

- *Type:* string

---

##### `displayOrderInput`<sup>Optional</sup> <a name="displayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput"></a>

```typescript
public readonly displayOrderInput: number;
```

- *Type:* number

---

##### `groupByFieldNameInput`<sup>Optional</sup> <a name="groupByFieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput"></a>

```typescript
public readonly groupByFieldNameInput: string;
```

- *Type:* string

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput"></a>

```typescript
public readonly isHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scimFilterInput`<sup>Optional</sup> <a name="scimFilterInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput"></a>

```typescript
public readonly scimFilterInput: string;
```

- *Type:* string

---

##### `countOf`<sup>Required</sup> <a name="countOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf"></a>

```typescript
public readonly countOf: string;
```

- *Type:* string

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

---

##### `groupByFieldName`<sup>Required</sup> <a name="groupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName"></a>

```typescript
public readonly groupByFieldName: string;
```

- *Type:* string

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scimFilter`<sup>Required</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter"></a>

```typescript
public readonly scimFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionSummary;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>

---


### DataSafeReportDefinitionTimeoutsOutputReference <a name="DataSafeReportDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeReportDefinition } from 'rhizo-co-terraform-provider-oci'

new dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeReportDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---



