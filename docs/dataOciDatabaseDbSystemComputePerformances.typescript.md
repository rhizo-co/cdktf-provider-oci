# `dataOciDatabaseDbSystemComputePerformances` Submodule <a name="`dataOciDatabaseDbSystemComputePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances oci_database_db_system_compute_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances(scope: Construct, id: string, config?: DataOciDatabaseDbSystemComputePerformancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig">DataOciDatabaseDbSystemComputePerformancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig">DataOciDatabaseDbSystemComputePerformancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape">resetDbSystemShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseDbSystemComputePerformancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]

---

##### `resetDbSystemShape` <a name="resetDbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape"></a>

```typescript
public resetDbSystemShape(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbSystemComputePerformances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbSystemComputePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemComputePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances">dbSystemComputePerformances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput">dbSystemShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape">dbSystemShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbSystemComputePerformances`<sup>Required</sup> <a name="dbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances"></a>

```typescript
public readonly dbSystemComputePerformances: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseDbSystemComputePerformancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a>

---

##### `dbSystemShapeInput`<sup>Optional</sup> <a name="dbSystemShapeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput"></a>

```typescript
public readonly dbSystemShapeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseDbSystemComputePerformancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `dbSystemShape`<sup>Required</sup> <a name="dbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape"></a>

```typescript
public readonly dbSystemShape: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemComputePerformancesConfig <a name="DataOciDatabaseDbSystemComputePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemComputePerformancesConfig: dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape">dbSystemShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbSystemShape`<sup>Optional</sup> <a name="dbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape"></a>

```typescript
public readonly dbSystemShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseDbSystemComputePerformancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#filter DataOciDatabaseDbSystemComputePerformances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances: dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances = { ... }
```


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct: dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct = { ... }
```


### DataOciDatabaseDbSystemComputePerformancesFilter <a name="DataOciDatabaseDbSystemComputePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemComputePerformancesFilter: dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps">networkBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops">networkIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps">networkThroughputInMbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `networkBandwidthInGbps`<sup>Required</sup> <a name="networkBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps"></a>

```typescript
public readonly networkBandwidthInGbps: number;
```

- *Type:* number

---

##### `networkIops`<sup>Required</sup> <a name="networkIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops"></a>

```typescript
public readonly networkIops: number;
```

- *Type:* number

---

##### `networkThroughputInMbps`<sup>Required</sup> <a name="networkThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps"></a>

```typescript
public readonly networkThroughputInMbps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList">computePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computePerformanceList`<sup>Required</sup> <a name="computePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList"></a>

```typescript
public readonly computePerformanceList: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a>

---


### DataOciDatabaseDbSystemComputePerformancesFilterList <a name="DataOciDatabaseDbSystemComputePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbSystemComputePerformancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbSystemComputePerformancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>[]

---


### DataOciDatabaseDbSystemComputePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemComputePerformances } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbSystemComputePerformancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter">DataOciDatabaseDbSystemComputePerformancesFilter</a>

---



