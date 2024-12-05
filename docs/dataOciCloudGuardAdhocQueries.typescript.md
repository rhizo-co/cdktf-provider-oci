# `dataOciCloudGuardAdhocQueries` Submodule <a name="`dataOciCloudGuardAdhocQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQueries <a name="DataOciCloudGuardAdhocQueries" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries oci_cloud_guard_adhoc_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries(scope: Construct, id: string, config: DataOciCloudGuardAdhocQueriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig">DataOciCloudGuardAdhocQueriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig">DataOciCloudGuardAdhocQueriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus">resetAdhocQueryStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam">resetTimeEndedFilterQueryParam</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam">resetTimeStartedFilterQueryParam</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardAdhocQueriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAdhocQueryStatus` <a name="resetAdhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus"></a>

```typescript
public resetAdhocQueryStatus(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeEndedFilterQueryParam` <a name="resetTimeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam"></a>

```typescript
public resetTimeEndedFilterQueryParam(): void
```

##### `resetTimeStartedFilterQueryParam` <a name="resetTimeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam"></a>

```typescript
public resetTimeStartedFilterQueryParam(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardAdhocQueries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardAdhocQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection">adhocQueryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput">adhocQueryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput">timeEndedFilterQueryParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput">timeStartedFilterQueryParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus">adhocQueryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam">timeEndedFilterQueryParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam">timeStartedFilterQueryParam</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adhocQueryCollection`<sup>Required</sup> <a name="adhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection"></a>

```typescript
public readonly adhocQueryCollection: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardAdhocQueriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `adhocQueryStatusInput`<sup>Optional</sup> <a name="adhocQueryStatusInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput"></a>

```typescript
public readonly adhocQueryStatusInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardAdhocQueriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeEndedFilterQueryParamInput`<sup>Optional</sup> <a name="timeEndedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput"></a>

```typescript
public readonly timeEndedFilterQueryParamInput: string;
```

- *Type:* string

---

##### `timeStartedFilterQueryParamInput`<sup>Optional</sup> <a name="timeStartedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput"></a>

```typescript
public readonly timeStartedFilterQueryParamInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `adhocQueryStatus`<sup>Required</sup> <a name="adhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus"></a>

```typescript
public readonly adhocQueryStatus: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeEndedFilterQueryParam`<sup>Required</sup> <a name="timeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam"></a>

```typescript
public readonly timeEndedFilterQueryParam: string;
```

- *Type:* string

---

##### `timeStartedFilterQueryParam`<sup>Required</sup> <a name="timeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam"></a>

```typescript
public readonly timeStartedFilterQueryParam: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollection <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesAdhocQueryCollection: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection = { ... }
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems = { ... }
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails = { ... }
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources = { ... }
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails = { ... }
```


### DataOciCloudGuardAdhocQueriesConfig <a name="DataOciCloudGuardAdhocQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesConfig: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus">adhocQueryStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam">timeEndedFilterQueryParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam">timeStartedFilterQueryParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `adhocQueryStatus`<sup>Optional</sup> <a name="adhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus"></a>

```typescript
public readonly adhocQueryStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardAdhocQueriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEndedFilterQueryParam`<sup>Optional</sup> <a name="timeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam"></a>

```typescript
public readonly timeEndedFilterQueryParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `timeStartedFilterQueryParam`<sup>Optional</sup> <a name="timeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam"></a>

```typescript
public readonly timeStartedFilterQueryParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

### DataOciCloudGuardAdhocQueriesFilter <a name="DataOciCloudGuardAdhocQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueriesFilter: dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources">adhocQueryResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adhocQueryResources`<sup>Required</sup> <a name="adhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```typescript
public readonly adhocQueryResources: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount">expectedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount">expiredCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount">failedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError">regionalError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">regionalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount">succeededCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectedCount`<sup>Required</sup> <a name="expectedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```typescript
public readonly expectedCount: string;
```

- *Type:* string

---

##### `expiredCount`<sup>Required</sup> <a name="expiredCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```typescript
public readonly expiredCount: string;
```

- *Type:* string

---

##### `failedCount`<sup>Required</sup> <a name="failedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```typescript
public readonly failedCount: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionalError`<sup>Required</sup> <a name="regionalError" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```typescript
public readonly regionalError: string;
```

- *Type:* string

---

##### `regionalStatus`<sup>Required</sup> <a name="regionalStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```typescript
public readonly regionalStatus: string;
```

- *Type:* string

---

##### `succeededCount`<sup>Required</sup> <a name="succeededCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```typescript
public readonly succeededCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails">adhocQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails">adhocQueryRegionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adhocQueryDetails`<sup>Required</sup> <a name="adhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails"></a>

```typescript
public readonly adhocQueryDetails: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a>

---

##### `adhocQueryRegionalDetails`<sup>Required</sup> <a name="adhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails"></a>

```typescript
public readonly adhocQueryRegionalDetails: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueriesAdhocQueryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a>

---


### DataOciCloudGuardAdhocQueriesFilterList <a name="DataOciCloudGuardAdhocQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardAdhocQueriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>[]

---


### DataOciCloudGuardAdhocQueriesFilterOutputReference <a name="DataOciCloudGuardAdhocQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQueries } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardAdhocQueriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>

---



