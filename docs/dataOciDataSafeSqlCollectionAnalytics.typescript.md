# `dataOciDataSafeSqlCollectionAnalytics` Submodule <a name="`dataOciDataSafeSqlCollectionAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionAnalytics <a name="DataOciDataSafeSqlCollectionAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics oci_data_safe_sql_collection_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics(scope: Construct, id: string, config: DataOciDataSafeSqlCollectionAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig">DataOciDataSafeSqlCollectionAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig">DataOciDataSafeSqlCollectionAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlCollectionAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeEnded"></a>

```typescript
public resetTimeEnded(): void
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeStarted"></a>

```typescript
public resetTimeStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlCollectionAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlCollectionAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList">DataOciDataSafeSqlCollectionAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.sqlCollectionAnalyticsCollection">sqlCollectionAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlCollectionAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList">DataOciDataSafeSqlCollectionAnalyticsFilterList</a>

---

##### `sqlCollectionAnalyticsCollection`<sup>Required</sup> <a name="sqlCollectionAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.sqlCollectionAnalyticsCollection"></a>

```typescript
public readonly sqlCollectionAnalyticsCollection: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlCollectionAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionAnalyticsConfig <a name="DataOciDataSafeSqlCollectionAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionAnalyticsConfig: dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlCollectionAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#filter DataOciDataSafeSqlCollectionAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}.

---

### DataOciDataSafeSqlCollectionAnalyticsFilter <a name="DataOciDataSafeSqlCollectionAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionAnalyticsFilter: dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#name DataOciDataSafeSqlCollectionAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#values DataOciDataSafeSqlCollectionAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#regex DataOciDataSafeSqlCollectionAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#name DataOciDataSafeSqlCollectionAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#values DataOciDataSafeSqlCollectionAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#regex DataOciDataSafeSqlCollectionAnalytics#regex}.

---

### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection: dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection = { ... }
```


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems: dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions: dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionAnalyticsFilterList <a name="DataOciDataSafeSqlCollectionAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlCollectionAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>[]

---


### DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlCollectionAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.sqlCollectionAnalyticCount">sqlCollectionAnalyticCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList</a>

---

##### `sqlCollectionAnalyticCount`<sup>Required</sup> <a name="sqlCollectionAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.sqlCollectionAnalyticCount"></a>

```typescript
public readonly sqlCollectionAnalyticCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection</a>

---



