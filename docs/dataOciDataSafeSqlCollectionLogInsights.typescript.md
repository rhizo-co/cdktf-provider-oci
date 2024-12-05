# `dataOciDataSafeSqlCollectionLogInsights` Submodule <a name="`dataOciDataSafeSqlCollectionLogInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionLogInsights <a name="DataOciDataSafeSqlCollectionLogInsights" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights oci_data_safe_sql_collection_log_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights(scope: Construct, id: string, config: DataOciDataSafeSqlCollectionLogInsightsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSqlCollectionLogInsightsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSqlCollectionLogInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSqlCollectionLogInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionLogInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection">sqlCollectionLogInsightsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput">sqlCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId">sqlCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSqlCollectionLogInsightsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a>

---

##### `sqlCollectionLogInsightsCollection`<sup>Required</sup> <a name="sqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection"></a>

```typescript
public readonly sqlCollectionLogInsightsCollection: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSqlCollectionLogInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sqlCollectionIdInput`<sup>Optional</sup> <a name="sqlCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput"></a>

```typescript
public readonly sqlCollectionIdInput: string;
```

- *Type:* string

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sqlCollectionId`<sup>Required</sup> <a name="sqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId"></a>

```typescript
public readonly sqlCollectionId: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionLogInsightsConfig <a name="DataOciDataSafeSqlCollectionLogInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionLogInsightsConfig: dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId">sqlCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sqlCollectionId`<sup>Required</sup> <a name="sqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId"></a>

```typescript
public readonly sqlCollectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}.

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}.

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSqlCollectionLogInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#filter DataOciDataSafeSqlCollectionLogInsights#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSqlCollectionLogInsightsFilter <a name="DataOciDataSafeSqlCollectionLogInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionLogInsightsFilter: dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}.

---

### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection: dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection = { ... }
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems: dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems = { ... }
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions: dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionLogInsightsFilterList <a name="DataOciDataSafeSqlCollectionLogInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlCollectionLogInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>[]

---


### DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSqlCollectionLogInsightsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter">DataOciDataSafeSqlCollectionLogInsightsFilter</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp">clientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName">clientOsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram">clientProgram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```typescript
public readonly clientIp: string;
```

- *Type:* string

---

##### `clientOsUserName`<sup>Required</sup> <a name="clientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```typescript
public readonly clientOsUserName: string;
```

- *Type:* string

---

##### `clientProgram`<sup>Required</sup> <a name="clientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```typescript
public readonly clientProgram: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount">sqlCollectionLogInsightCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sqlCollectionLogInsightCount`<sup>Required</sup> <a name="sqlCollectionLogInsightCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount"></a>

```typescript
public readonly sqlCollectionLogInsightCount: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSqlCollectionLogInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a>

---



